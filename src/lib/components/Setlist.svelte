<script>
	function timeToSeconds(time) {
		let timeSplit = time.split(':');
		let minutes = timeSplit[0] * 60;
		return parseInt(minutes, 10) + parseInt(timeSplit[1], 10);
	}

	function secondsToMinutes(initialSeconds) {
		const mins = Math.floor(initialSeconds / 60);
		return mins + ':' + (initialSeconds % 60);
	}

	const setlist = [
		{
			title: 'Sad But True',
			artist: 'Metallica',
			length: timeToSeconds('5:25'),
			tags: ['rock', 'metal', '90s'],
			key: 'D'
		},
		{
			title: 'Tom Sawyer',
			artist: 'Rush',
			length: timeToSeconds('4:37'),
			tags: ['rock', 'vintage', '80s'],
			key: 'E'
		},
		{
			title: 'Cult of Personality',
			artist: 'Rush',
			length: timeToSeconds('4:55'),
			tags: ['rock', '80s'],
			key: 'E'
		}
	];

	let filteredSetlist = $state(setlist);

	const tags = new Set();
	tags.add('');
	for (let song of setlist) {
		for (let tag of song.tags) {
			tags.add(tag);
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
		let setlistSet = new Set();
		// TODO: n^2
		for (let option of selectedOptions) {
			for (let song of setlist) {
				if (song.tags.indexOf(option.value) > -1) {
					setlistSet.add(song);
				}
			}
		}
		filteredSetlist = Array.from(setlistSet);
	}
</script>

<div>
	<select id="tags" onchange={(x) => changeTag(x)} multiple>
		{#each tags as tag}
			<option value={tag}>
				{tag}
			</option>
		{/each}
	</select>
	<ul>
		{#each filteredSetlist as song}
			<li>{song.title} {secondsToMinutes(song.length)}</li>
		{/each}
	</ul>
</div>

<style>
</style>
