function timeToSeconds(time) {
	let timeSplit = time.split(':');
	let minutes = timeSplit[0] * 60;
	return parseInt(minutes, 10) + parseInt(timeSplit[1], 10);
}

export const setlist = [
	[
		{
            id: 0,
			title: 'Helter Skelter',
			artist: 'Motley Crue',
			songLength: timeToSeconds('3:12'),
			tags: ['rock', 'heavy metal', 'hair metal', '80s'],
			key: 'A',
			drop: 0
		},
		{
            id: 1,
			title: 'Enter Sandman',
			artist: 'Metallica',
			songLength: timeToSeconds('5:32'),
			tags: ['rock', 'metal', '90s'],
			key: 'E',
			drop: 0
		},
		{
            id: 2,
			title: 'Tom Sawyer',
			artist: 'Rush',
			songLength: timeToSeconds('4:37'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'E',
			drop: 0
		},
		{
            id: 3,
			title: 'TNT',
			artist: 'AC/DC',
			songLength: timeToSeconds('3:35'),
			tags: ['rock', '70s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
            id: 4,
			title: 'Sad But True',
			artist: 'Metallica',
			songLength: timeToSeconds('5:25'),
			tags: ['rock', 'metal', '90s'],
			key: 'D',
			drop: -2
		}
	],
	[
		{
            id: 5,
			title: 'Cult of Personality',
			artist: 'Living Colour',
			songLength: timeToSeconds('4:55'),
			tags: ['rock', '80s'],
			key: 'C',
			drop: 0
		}
	],
	[
		{
            id: 6,
			title: 'Basket Case',
			artist: 'Green Day',
			songLength: timeToSeconds('3:02'),
			tags: ['rock', 'pop punk', 'punk', 'basic', '90s'],
			key: 'Eb',
			drop: -1
		}
	],
	[
		{
            id: 7,
			title: 'Smells Like Teen Spirit',
			artist: 'Nirvana',
			songLength: timeToSeconds('5:02'),
			tags: ['rock', 'grunge', 'basic', '90s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 8,
			title: 'You Oughta Know',
			artist: 'Alanis Morissette',
			songLength: timeToSeconds('4:09'),
			tags: ['rock', 'basic', 'ladies night', '90s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 9,
			title: 'Metal Health (Bang Your Head)',
			artist: 'Quiet Riot',
			songLength: timeToSeconds('5:16'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'D',
			drop: 0
		}
	],
	[
		{
            id: 10,
			title: 'Cochise',
			artist: 'Audioslave',
			songLength: timeToSeconds('3:42'),
			tags: ['rock', '2000s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
            id: 11,
			title: 'Kickstart My Heart',
			artist: 'Motley Crue',
			songLength: timeToSeconds('4:44'),
			tags: ['rock', 'hair metal', '80s'],
			key: 'G',
			drop: -2
		}
	],
	[
		{
            id: 12,
			title: 'Fight For Your Right',
			artist: 'Beastie Boys',
			songLength: timeToSeconds('3:29'),
			tags: ['rock', 'rap', '80s', 'basic'],
			key: 'Ab',
			drop: -1
		}
	],
	[
		{
            id: 13,
			title: 'Panama',
			artist: 'Van Halen',
			songLength: timeToSeconds('3:30'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'Ab',
			drop: -1
		}
	],
	[
		{
            id: 14,
			title: 'Look What The Cat Dragged In',
			artist: 'Poison',
			songLength: timeToSeconds('3:11'),
			tags: ['rock', 'hair metal', '80s'],
			key: 'Eb',
			drop: -1
		}
	],
	[
		{
            id: 15,
			title: 'Heartbreaker',
			artist: 'Pat Benatar',
			songLength: timeToSeconds('3:29'),
			tags: ['rock', 'basic', '70s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 16,
			title: 'Baracuda',
			artist: 'Heart',
			songLength: timeToSeconds('4:22'),
			tags: ['rock', 'basic', '70s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 17,
			title: 'Seven Nation Army',
			artist: 'White Stripes',
			songLength: timeToSeconds('3:52'),
			tags: ['rock', 'basic', '2000s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 18,
			title: 'Vasoline',
			artist: 'Stone Temple Pilots',
			songLength: timeToSeconds('2:55'),
			tags: ['rock', 'grunge', 'basic', '90s', '2000s'],
			key: 'A#',
			drop: 0
		}
	],
	[
		{
            id: 19,
			title: 'Paranoid',
			artist: 'Black Sabbath',
			songLength: timeToSeconds('2:48'),
			tags: ['rock', 'heavy metal', '70s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 20,
			title: 'Bark at the Moon',
			artist: 'Ozzy Osbourne',
			songLength: timeToSeconds('4:17'),
			tags: ['rock', 'hair metal', 'heavy metal', '80s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
            id: 21,
			title: 'Everlong',
			artist: 'Foo Fighters',
			songLength: timeToSeconds('4:11'),
			tags: ['rock', 'basic', '90s'],
			key: 'B',
			drop: -2
		}
	],
	[
		{
            id: 22,
			title: 'Creep',
			artist: 'Radiohead',
			songLength: timeToSeconds('3:59'),
			tags: ['rock', 'basic', '90s'],
			key: 'G',
			drop: 0
		}
	],
	[
		{
            id: 23,
			title: 'Hit Me With Your Best Shot',
			artist: 'Pat Benatar',
			songLength: timeToSeconds('2:51'),
			tags: ['rock', 'basic', '70s', '80s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
            id: 24,
			title: 'Dr. Feelgood',
			artist: 'Motley Crue',
			songLength: timeToSeconds('4:51'),
			tags: ['rock', 'hair metal', 'heavy metal', '80s'],
			key: 'D',
			drop: -2
		}
	],
	[
		{
            id: 25,
			title: 'Zombie',
			artist: 'The Cranberries',
			songLength: timeToSeconds('5:06'),
			tags: ['rock', 'basic', '90s'],
			key: 'G',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	],
	[
		{
            id: -1,
			title: '',
			artist: '',
			songLength: timeToSeconds('0:00'),
			tags: [],
			key: '',
			drop: 0
		}
	]
];
