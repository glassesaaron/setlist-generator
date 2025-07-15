<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { setlist as rawSetlist } from '../data/setlist.js';

	// drag and drop
	const flipDurationMs = 300;
	function handleDndConsider(index, e) {
		finalSetlists[index] = e.detail.items;
	}
	function handleDndFinalize(index, e) {
		finalSetlists[index] = e.detail.items;
	}

	// massage data, remove empty songs
	const fullSetlist = [];
	for (let group of rawSetlist) {
		fullSetlist.push(group.filter((x) => x.songLength > 0));
	}

	function secondsToMinutes(initialSeconds) {
		const mins = Math.floor(initialSeconds / 60);
		let seconds = initialSeconds % 60;
		if (seconds < 10) {
			seconds = seconds.toString().padStart(2, '0');
		} else {
			seconds = seconds.toString().padEnd(2, '0');
		}
		return mins + ':' + seconds;
	}
	function minutesToSeconds(minutes) {
		return minutes * 60;
	}
	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let filteredSetlist = $state(fullSetlist);

	const tags = new Set();
	tags.add('');
	for (let group of fullSetlist) {
		for (let song of group) {
			for (let tag of song.tags) {
				tags.add(tag);
			}
		}
	}

	function changeTag(x) {
		const selectedOptions = x.target.selectedOptions;
		if (
			selectedOptions.length === 0 ||
			(selectedOptions.length === 1 && selectedOptions[0].value === '')
		) {
			filteredSetlist = [...fullSetlist];
			return;
		}
		let usedSongs = new Set();
		let setlistArray = [];
		let selectedTags = [];
		for (let option of selectedOptions) {
			selectedTags.push(option.value);
		}
		for (let group of fullSetlist) {
			let newGroup = [];
			for (let song of group) {
				for (let tag of song.tags) {
					if (selectedTags.indexOf(tag) > -1 && !usedSongs.has(song)) {
						newGroup.push(song);
						usedSongs.add(song);
						continue;
					}
				}
			}
			if (newGroup.length > 0) {
				setlistArray.push(newGroup);
			}
		}
		filteredSetlist = setlistArray;
	}

	let showSongKey = $state(true);
	let preferBasicFirstSet = $state(true);
	let songsLength = $state();
	let setLength = $state(210);
	let setNumber = $state(2);
	let setBreakLength = $state(30);
	let setBuffer = $state(5);
	let finalSetlists = $state([]);
	let showPrint = $state(false);

	$effect(() => {
		songsLength = Math.floor(setLength - (setNumber - 1) * setBreakLength - setNumber * setBuffer);
	});

	function buildSetlist() {
		let remainingSongs = JSON.parse(JSON.stringify(filteredSetlist));
		let remainingSets = setNumber;
		let lengthPerSet = Math.floor(songsLength / setNumber);
		let setlists = [];
		let outOfSongs = false;
		while (remainingSets > 0) {
			let setlist = [];
			let remainingLength = minutesToSeconds(lengthPerSet);
			let unpreferredSongs = [];
			let unuseableSongs = [];
			if (setlists.length === 0 && preferBasicFirstSet) {
				let basicSongs = [];
				while (remainingSongs.length > 0) {
					let songGroup = remainingSongs.shift();
					let preferredSongGroup = songGroup.filter((x) => x.tags.includes('basic'));
					let unpreferredSongGroup = songGroup.filter((x) => !x.tags.includes('basic'));
					if (preferredSongGroup.length > 0) {
						basicSongs.push(preferredSongGroup);
					}
					unpreferredSongs.push(unpreferredSongGroup);
				}
				remainingSongs = basicSongs;
			}
			while (remainingLength > 0 && (remainingSongs.length > 0 || unpreferredSongs.length > 0)) {
				let nextSongGroupPosition = 0;
				let nextSongGroup = {};
				if (remainingSongs.length > 0) {
					nextSongGroupPosition = randomIntFromInterval(0, remainingSongs.length - 1);
					nextSongGroup = remainingSongs.splice(nextSongGroupPosition, 1)[0];
				} else {
					nextSongGroupPosition = randomIntFromInterval(0, unpreferredSongs.length - 1);
					nextSongGroup = unpreferredSongs.splice(nextSongGroupPosition, 1)[0];
				}
				let songLength = nextSongGroup.reduce((a, c) => a + c.songLength, 0);
				if (songLength <= remainingLength) {
					setlist.push(nextSongGroup);
					remainingLength -= songLength;
				} else {
					unuseableSongs.push(nextSongGroup);
				}
			}
			if (remainingLength > 300) {
				outOfSongs = true;
			}
			remainingSongs = [...remainingSongs, ...unpreferredSongs, ...unuseableSongs];
			setlists.push(setlist);
			remainingSets--;
		}
		if (outOfSongs) {
			alert('You do not have enough songs to fill your desired set length.');
		}
		setlists.push(remainingSongs);
		finalSetlists = [];
		for (let currentSet of setlists) {
			let flatSet = [];
			for (let currentGroup of currentSet) {
				for (let currentSong of currentGroup) {
					flatSet.push(currentSong);
				}
			}
			finalSetlists.push(flatSet);
		}
	}

	function getSetTitle(setlists, index, showSetLength) {
		if (index === setlists.length - 1) {
			return 'Unused Songs';
		}
		const setlist = setlists[index];
		const setLength = secondsToMinutes(setlist.reduce((a, c) => a + c.songLength, 0));
		return `Set ${index + 1} ${showSetLength ? setLength : ''}`;
	}

	// save a setlist to a url
	function saveSetlistToUrl() {
		let compressedSetlists = [];
		for (let setlist of finalSetlists) {
			let compressedSetlist = [];
			for (let song of setlist) {
				compressedSetlist.push(song.id);
			}
			compressedSetlists.push(compressedSetlist);
		}
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set('setlist', JSON.stringify(compressedSetlists));
		window.location.search = urlParams;
	}

	// load a setlist from url
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('setlist')) {
		const existingSetlists = JSON.parse(urlParams.get('setlist'));
		finalSetlists = [];
		for (let x in existingSetlists) {
			let existingSetlist = existingSetlists[x];
			let currentSetlist = [];
			// TODO: n^2, refactor
			for (let y in existingSetlist) {
				let foundSong = {};
				for (let fullGroup of fullSetlist) {
					for (let fullSong of fullGroup) {
						if (fullSong.id === existingSetlist[y]) {
							foundSong = fullSong;
							break;
						}
					}
					if (foundSong.id) {
						break;
					}
				}
				currentSetlist.push(foundSong);
			}
			// svelte-ignore state_referenced_locally
			finalSetlists.push(currentSetlist);
		}
	}
</script>

<div
	id="headerContainer"
	style="display: {finalSetlists.length > 0 || showPrint ? 'none' : 'flex'}"
>
	<select id="tags" onchange={(x) => changeTag(x)} multiple>
		{#each tags as tag}
			<option value={tag}>
				{tag}
			</option>
		{/each}
	</select>
	<ul>
		{#each filteredSetlist as group}
			{#if group.length > 1}
				<li>
					<b>Group</b>
					<ul>
						{#each group as song}
							<li>
								{song.title}
								{secondsToMinutes(song.songLength)} : {song.key}
								{#if song.drop !== 0}<b>({song.drop})</b>{/if}
							</li>
						{/each}
					</ul>
				</li>
			{:else}
				{#each group as song}
					<li>
						{song.title}
						{secondsToMinutes(song.songLength)} : {song.key}
						{#if song.drop !== 0}<b>({song.drop})</b>{/if}
					</li>
				{/each}
			{/if}
		{/each}
	</ul>
	<div id="optionsContainer">
		<form>
			<label for="setLength">Total Set Time</label>
			<select name="setLength" bind:value={setLength}>
				<option value={15}>15 minutes</option>
				<option value={30}>30 minutes</option>
				<option value={45}>45 minutes</option>
				<option value={60}>1 hour</option>
				<option value={75}>1 hour 15 minutes</option>
				<option value={90}>1 hour 30 minutes</option>
				<option value={105}>1 hour 45 minutes</option>
				<option value={120}>2 hours</option>
				<option value={135}>2 hours 15 minutes</option>
				<option value={150}>2 hours 30 minutes</option>
				<option value={165}>2 hours 45 minutes</option>
				<option value={180}>3 hours</option>
				<option value={195}>3 hours 15 minutes</option>
				<option value={210}>3 hours 30 minutes</option>
				<option value={225}>3 hours 45 minutes</option>
				<option value={240}>4 hours</option>
			</select>
			<br />
			<label for="setNumber">Total Number of Sets</label>
			<select name="setNumber" bind:value={setNumber}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
			</select>
			<br />
			<label for="setBreakLength">Break Time Between Sets</label>
			<select name="setBreakLength" bind:value={setBreakLength}>
				<option value={0}>0 minutes (no breaks)</option>
				<option value={15}>15 minutes</option>
				<option value={30}>30 minutes</option>
				<option value={45}>45 minutes</option>
				<option value={60}>60 minutes</option>
			</select>
			<br />
			<label for="setBuffer">Buffer Per Set</label>
			<select name="setBuffer" bind:value={setBuffer}>
				<option value={0}>0 minutes (no breaks, talking, etc.)</option>
				<option value={1}>1 minutes</option>
				<option value={2}>2 minutes</option>
				<option value={3}>3 minutes</option>
				<option value={4}>4 minutes</option>
				<option value={5}>5 minutes</option>
				<option value={6}>6 minutes</option>
				<option value={7}>7 minutes</option>
				<option value={8}>8 minutes</option>
				<option value={9}>9 minutes</option>
				<option value={10}>10 minutes</option>
			</select>
			<br />
			<label>
				<input type="checkbox" bind:checked={preferBasicFirstSet} />
				Prefer Basic Songs First Set?
			</label>
		</form>
	</div>
	{#if songsLength !== null}
		<div>
			<h2>Total Actual Playtime Length:</h2>
			<h3>{songsLength} minutes</h3>
		</div>
	{/if}
	<div>
		<button id="buildSetButton" onclick={buildSetlist}>Build Set(s)</button>
	</div>
</div>
<div
	id="bodyContainer"
	style="display: {finalSetlists.length === 0 || showPrint ? 'none' : 'block'}"
>
	<label>
		<input type="checkbox" bind:checked={showSongKey} />
		Show Song Key?
	</label>
	{#each finalSetlists as items, index}
		<h1>{getSetTitle(finalSetlists, index, true)}</h1>
		<section
			use:dndzone={{ items, flipDurationMs }}
			onconsider={(e) => handleDndConsider(index, e)}
			onfinalize={(e) => handleDndFinalize(index, e)}
		>
			{#each items as song (song.id)}
				<div animate:flip={{ duration: flipDurationMs }}>
					{song.title}
					{#if showSongKey}: {song.key}&nbsp;{/if}{#if song.drop !== 0}<b>({song.drop})</b>{/if}
				</div>
			{/each}
		</section>
	{/each}
	<br />
	<button
		id="printButton"
		onclick={() => {
			showPrint = true;
		}}>Print</button
	>
	<button
		id="shareButton"
		onclick={() => {
			saveSetlistToUrl();
		}}>Share</button
	>
	<button
		id="resetButton"
		onclick={() => {
			window.location.href = window.location.origin + window.location.pathname;
		}}>Reset</button
	>
</div>
<div id="printContainer" style="display: {showPrint ? 'block' : 'none'}">
	{#each finalSetlists as items, index}
		{#if index !== finalSetlists.length - 1}
			<h1>{getSetTitle(finalSetlists, index, false)}</h1>
			{#each items as song (song.id)}
				<div>
					{song.title}
					{#if song.drop !== 0}<b>({song.drop})</b>{/if}
				</div>
			{/each}
			<div class="page-break"></div>
		{/if}
	{/each}
</div>

<style>
	#headerContainer {
		display: flex;
		gap: 1rem;
		height: 100%;
	}

	#optionsContainer {
		padding-top: 1rem;
	}

	#buildSetButton {
		margin: 1rem 1rem 0rem 1rem;
		width: 20rem;
		height: 5rem;
		cursor: pointer;
		font-size: 2rem;
	}

	#bodyContainer {
		padding: 1rem 2rem;
	}

	#bodyContainer section {
		width: 100%;
		padding: 0.3em;
		border: 1px solid black;
	}

	#printButton,
	#shareButton,
	#resetButton {
		margin: 1rem 1rem 0rem 1rem;
		width: 20rem;
		height: 5rem;
		cursor: pointer;
		font-size: 2rem;
	}

	#printContainer {
		position: absolute;
		top: 0px;
		left: 0px;
		padding-left: 2rem;
		font-size: 35px;
	}

	#printContainer h1 {
		margin-top: 2rem;
	}

	@media print {
		.page-break {
			break-after: page;
		}
	}
</style>
