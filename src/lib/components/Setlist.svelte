<script>
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
</div>

<style>
	#container {
		display: flex;
		height: 100%;
	}
</style>
