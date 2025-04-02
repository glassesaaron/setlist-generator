<script>
	import { onMount } from 'svelte';
	import { rawSetlist } from '../data/setlist.js';

	function secondsToMinutes(initialSeconds) {
		const mins = Math.floor(initialSeconds / 60);
		return mins + ':' + (initialSeconds % 60).toString().padEnd(2, '0');
	}
	function minutesToSeconds(minutes) {
		return minutes * 60;
	}
	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let filteredSetlist = $state(rawSetlist);

	const tags = new Set();
	tags.add('');
	for (let group of rawSetlist) {
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
			filteredSetlist = [...rawSetlist];
			return;
		}
		let usedSongs = new Set();
		let setlistArray = [];
		let selectedTags = [];
		for (let option of selectedOptions) {
			selectedTags.push(option.value);
		}
		for (let group of rawSetlist) {
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

	let songsLength = $state();
	let setLength = $state(210);
	let setNumber = $state(2);
	let setBreakLength = $state(30);
	let setBuffer = $state(5);
	let finalSetlists = $state([]);

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
			let unuseableSongs = [];
			while (remainingLength > 0 && remainingSongs.length > 0) {
				let nextSongPosition = randomIntFromInterval(0, remainingSongs.length - 1);
				let nextSong = remainingSongs.splice(nextSongPosition, 1)[0];
				let songLength = nextSong.reduce((a, c) => a + c.songLength, 0);
				if (songLength <= remainingLength) {
					setlist.push(nextSong);
					remainingLength -= songLength;
				} else {
					unuseableSongs.push(nextSong);
				}
			}
			if (remainingLength > 300) {
				outOfSongs = true;
			}
			remainingSongs = [...remainingSongs, ...unuseableSongs];
			setlists.push(setlist);
			remainingSets--;
		}
		if (outOfSongs) {
			alert('You do not have enough songs to fill your desired set length.');
		}
		finalSetlists = setlists;
	}

	function getSetTitle(setlist, index) {
		const setLength = secondsToMinutes(
			setlist.reduce((a, c) => a + c.reduce((a, c) => a + c.songLength, 0), 0)
		);
		return `Set ${index + 1} ${setLength}`;
	}
</script>

<div id="headerContainer">
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
							<li>{song.title} {secondsToMinutes(song.songLength)} ({song.key})</li>
						{/each}
					</ul>
				</li>
			{:else}
				{#each group as song}
					<li>{song.title} {secondsToMinutes(song.songLength)} ({song.key})</li>
				{/each}
			{/if}
		{/each}
	</ul>
	<div id="timeContainer">
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
<div id="bodyContainer">
	{#each finalSetlists as setlist, index}
		<h1>{getSetTitle(setlist, index)}</h1>
		<ul>
			{#each setlist as group}
				{#each group as song}
					<li>{song.title} ({song.key})</li>
				{/each}
			{/each}
		</ul>
	{/each}
</div>

<style>
	#headerContainer {
		display: flex;
		gap: 1rem;
		height: 60%;
		padding-bottom: 1rem;
	}

	#timeContainer {
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
		height: 100%;
		border-top: 1px solid #000000;
		padding: 1rem 2rem;
	}
</style>
