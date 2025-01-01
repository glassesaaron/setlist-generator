function timeToSeconds(time) {
	let timeSplit = time.split(':');
	let minutes = timeSplit[0] * 60;
	return parseInt(minutes, 10) + parseInt(timeSplit[1], 10);
}

export const setlist = [
	[
		{
			title: 'Enter Sandman',
			artist: 'Metallica',
			length: timeToSeconds('5:32'),
			tags: ['rock', 'metal', '90s'],
			key: 'E'
		},
		{
			title: 'Tom Sawyer',
			artist: 'Rush',
			length: timeToSeconds('4:37'),
			tags: ['rock', 'vintage', '80s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Sad But True',
			artist: 'Metallica',
			length: timeToSeconds('5:25'),
			tags: ['rock', 'metal', '90s'],
			key: 'D'
		}
	],
	[
		{
			title: 'Cult of Personality',
			artist: 'Rush',
			length: timeToSeconds('4:55'),
			tags: ['rock', '80s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Basket Case',
			artist: 'Green Day',
			length: timeToSeconds('3:02'),
			tags: ['rock', 'pop punk', 'punk', 'basic', '90s'],
			key: 'Eb'
		}
	],
	[
		{
			title: 'Smells Like Teen Spirit',
			artist: 'Nirvana',
			length: timeToSeconds('5:02'),
			tags: ['rock', 'grunge', 'basic', '90s'],
			key: 'E'
		}
	],
	[
		{
			title: 'You Oughta Know',
			artist: 'Alanis Morissette',
			length: timeToSeconds('4:09'),
			tags: ['rock', 'basic', 'ladies night', '90s'],
			key: 'E'
		}
	]
];
