<script>
	import { onMount } from 'svelte';
	import { setlist } from '../data/setlist.js';

	function secondsToMinutes(initialSeconds) {
		const mins = Math.floor(initialSeconds / 60);
		return mins + ':' + (initialSeconds % 60).toString().padEnd(2, '0');
	}
	let filteredSetlist = $state(setlist);

	const tags = new Set();
	tags.add('');
	for (let group of setlist) {
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
			filteredSetlist = [...setlist];
			return;
		}
		let usedSongs = new Set();
		let setlistArray = [];
		let selectedTags = [];
		for (let option of selectedOptions) {
			selectedTags.push(option.value);
		}
		for (let group of setlist) {
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

	$effect(() => {
		songsLength =
			setNumber === 0 || setBreakLength === 0
				? setLength
				: Math.floor(setLength - (setNumber - 1) * setBreakLength);
	});
</script>

<div id="container">
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
							<li>{song.title} {secondsToMinutes(song.length)} ({song.key})</li>
						{/each}
					</ul>
				</li>
			{:else}
				{#each group as song}
					<li>{song.title} {secondsToMinutes(song.length)} ({song.key})</li>
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
				<option value={45}>15 minutes</option>
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
		</form>
	</div>
	{#if songsLength}
		<div>
			<h2>Total Set Length:</h2>
			<h3>{songsLength} minutes</h3>
		</div>
	{/if}
</div>

<style>
	#container {
		display: flex;
		gap: 1rem;
		height: 100%;
	}

	#timeContainer {
		padding-top: 1rem;
	}
</style>
