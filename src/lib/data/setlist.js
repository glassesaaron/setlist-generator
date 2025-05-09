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
			songLength: timeToSeconds('5:32'),
			tags: ['rock', 'metal', '90s'],
			key: 'E'
		},
		{
			title: 'Tom Sawyer',
			artist: 'Rush',
			songLength: timeToSeconds('4:37'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Sad But True',
			artist: 'Metallica',
			songLength: timeToSeconds('5:25'),
			tags: ['rock', 'metal', '90s'],
			key: 'D'
		}
	],
	[
		{
			title: 'Cult of Personality',
			artist: 'Rush',
			songLength: timeToSeconds('4:55'),
			tags: ['rock', '80s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Basket Case',
			artist: 'Green Day',
			songLength: timeToSeconds('3:02'),
			tags: ['rock', 'pop punk', 'punk', 'basic', '90s'],
			key: 'Eb'
		}
	],
	[
		{
			title: 'Smells Like Teen Spirit',
			artist: 'Nirvana',
			songLength: timeToSeconds('5:02'),
			tags: ['rock', 'grunge', 'basic', '90s'],
			key: 'E'
		}
	],
	[
		{
			title: 'You Oughta Know',
			artist: 'Alanis Morissette',
			songLength: timeToSeconds('4:09'),
			tags: ['rock', 'basic', 'ladies night', '90s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Metal Health (Bang Your Head)',
			artist: 'Quiet Riot',
			songLength: timeToSeconds('5:16'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'D'
		}
	],
	[
		{
			title: 'Cochise',
			artist: 'Audioslave',
			songLength: timeToSeconds('3:42'),
			tags: ['rock', '2000s'],
			key: 'A'
		}
	],
	[
		{
			title: 'Kickstart My Heart',
			artist: 'Motley Crue',
			songLength: timeToSeconds('4:44'),
			tags: ['rock', 'hair metal', '80s'],
			key: 'G'
		}
	],
	[
		{
			title: 'Fight For Your Right',
			artist: 'Beastie Boys',
			songLength: timeToSeconds('3:29'),
			tags: ['rock', 'rap', '80s', 'basic'],
			key: 'Ab'
		}
	],
	[
		{
			title: 'Panama',
			artist: 'Van Halen',
			songLength: timeToSeconds('3:30'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'Ab'
		}
	],
	[
		{
			title: 'Look What The Cat Dragged In',
			artist: 'Poison',
			songLength: timeToSeconds('3:11'),
			tags: ['rock', 'hair metal', '80s'],
			key: 'Eb'
		}
	],
	[
		{
			title: 'Heartbreaker',
			artist: 'Pat Benatar',
			songLength: timeToSeconds('3:29'),
			tags: ['rock', 'basic', '70s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Baracuda',
			artist: 'Heart',
			songLength: timeToSeconds('4:22'),
			tags: ['rock', 'basic', '70s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Seven Nation Army',
			artist: 'White Stripes',
			songLength: timeToSeconds('3:52'),
			tags: ['rock', 'basic', '2000s'],
			key: 'E'
		}
	],
	[
		{
			title: 'Vasoline',
			artist: 'Stone Temple Pilots',
			songLength: timeToSeconds('2:55'),
			tags: ['rock', 'grunge', 'basic', '90s', '2000s'],
			key: 'A#'
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	],
	[
		{
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: ''
		}
	]
];
