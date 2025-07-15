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
			key: 'Bb',
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
			id: 26,
			title: 'Rebel Yell',
			artist: 'Billy Idol',
			songLength: timeToSeconds('4:49'),
			tags: ['rock', 'basic', '80s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
			id: 27,
			title: 'Mother',
			artist: 'Danzig',
			songLength: timeToSeconds('3:25'),
			tags: ['rock', '80s'],
			key: 'B',
			drop: 0
		}
	],
	[
		{
			id: 28,
			title: 'Wicked Game',
			artist: 'HIM',
			songLength: timeToSeconds('3:54'),
			tags: ['rock', 'basic', '80s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
			id: 29,
			title: 'Got Me Under Pressure',
			artist: 'ZZ Top',
			songLength: timeToSeconds('4:03'),
			tags: ['rock', '80s'],
			key: 'D',
			drop: 0
		}
	],
	[
		{
			id: 30,
			title: 'Man in the Box',
			artist: 'Alice in Chains',
			songLength: timeToSeconds('4:45'),
			tags: ['rock', 'basic', 'grunge', '90s'],
			key: 'Ab',
			drop: 0
		}
	],
	[
		{
			id: 31,
			title: 'I Wanna Rock',
			artist: 'Twisted Sister',
			songLength: timeToSeconds('3:00'),
			tags: ['rock', 'basic', '80s'],
			key: 'D',
			drop: 0
		}
	],
	[
		{
			id: 32,
			title: 'Killing In The Name',
			artist: 'Rage Against The Machine',
			songLength: timeToSeconds('5:14'),
			tags: ['rock', 'basic', '90s', '2000s'],
			key: 'G',
			drop: -2
		}
	],
	[
		{
			id: 33,
			title: 'Bad Case Of Loving You',
			artist: 'Robert Palmer',
			songLength: timeToSeconds('3:16'),
			tags: ['rock', 'basic', '70s', '80s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
			id: 34,
			title: "Thunder Kiss '65",
			artist: 'White Zombie',
			songLength: timeToSeconds('3:54'),
			tags: ['rock', 'metal', '90s'],
			key: 'A',
			drop: 0
		}
	],

	[
		{
			id: 35,
			title: "I Think We're Alone Now",
			artist: 'Tiffany',
			songLength: timeToSeconds('3:49'),
			tags: ['rock', 'basic', 'ladies night', '80s'],
			key: 'G',
			drop: -2
		}
	],
	[
		{
			id: 36,
			title: 'Crazy Bitch',
			artist: 'Buckcherry',
			songLength: timeToSeconds('3:24'),
			tags: ['rock', 'ladies night', '00s'],
			key: 'Db',
			drop: 0
		}
	],
	[
		{
			id: 37,
			title: 'Seek & Destroy',
			artist: 'Metallica',
			songLength: timeToSeconds('6:55'),
			tags: ['rock', 'heavy metal', '80s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
			id: 38,
			title: 'T.N.T.',
			artist: 'AC/DC',
			songLength: timeToSeconds('3:34'),
			tags: ['rock', '70s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
			id: 39,
			title: 'Highway to Hell',
			artist: 'AC/DC',
			songLength: timeToSeconds('3:28'),
			tags: ['rock', 'basic', '70s'],
			key: 'Gb',
			drop: -1
		}
	],
	[
		{
			id: 40,
			title: 'I Hate Myself for Loving You',
			artist: 'Joan Jett & the Blackhearts',
			songLength: timeToSeconds('4:07'),
			tags: ['rock', 'basic', '80s'],
			key: 'A',
			drop: 0
		}
	],
	[
		{
			id: 41,
			title: "We're Not Gonna Take It",
			artist: 'Twisted Sister',
			songLength: timeToSeconds('3:39'),
			tags: ['rock', 'heavy metal', 'hair metal', '80s'],
			key: 'E',
			drop: 0
		}
	],
	[
		{
			id: 42,
			title: 'Over the Mountain',
			artist: 'Ozzy Osbourne',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 43,
			title: "Let's Go Crazy",
			artist: 'Prince',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 44,
			title: 'Brain Stew',
			artist: 'Green Day',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 45,
			title: 'Jaded',
			artist: 'Green Day',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 46,
			title: 'My Own Worst Enemy',
			artist: 'Lit',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 47,
			title: 'Tush',
			artist: 'ZZ Top',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 48,
			title: 'Are You Gonna Go My Way',
			artist: 'Lenny Kravitz',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 49,
			title: 'Beat It',
			artist: 'Michael Jackson',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 50,
			title: 'Figured You Out',
			artist: 'Nickelback',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 51,
			title: 'Breaking the Law',
			artist: 'Judas Priest',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 52,
			title: 'Live Wire',
			artist: 'Motley Crue',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 53,
			title: 'Symphony Of Destruction',
			artist: 'Megadeth',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 54,
			title: 'Round and Round',
			artist: 'Ratt',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 55,
			title: '...Baby One More Time',
			artist: 'Brittany Spears',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 56,
			title: 'War Pigs',
			artist: 'Black Sabbath',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 57,
			title: 'Blitzkrieg Bop',
			artist: 'Ramones',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 58,
			title: 'Walk',
			artist: 'Pantera',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 59,
			title: 'Welcome to Paradise',
			artist: 'Green Day',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 60,
			title: 'Bring Me To Life',
			artist: 'Evanescence',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 61,
			title: 'Bad Romance',
			artist: 'Lady Gaga',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 62,
			title: 'Looks That Kill',
			artist: 'Motley Crue',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 63,
			title: 'Crazy Train',
			artist: 'Ozzy Osbourne',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 64,
			title: 'Still of the Night',
			artist: 'Whitesnake',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 65,
			title: "She's Got The Look",
			artist: 'Candlelight Red',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 66,
			title: 'For Whom The Bell Tolls',
			artist: 'Metallica',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 67,
			title: 'Home Sweet Home',
			artist: 'Motley Crue',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 68,
			title: 'One Last Breath',
			artist: 'Creed',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 69,
			title: 'Ace of Spades',
			artist: 'Motorhead',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 70,
			title: 'Immigrant Song',
			artist: 'Led Zeppelin',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 71,
			title: 'I Want You to Want Me - Live at Budokan',
			artist: 'Cheap Trick',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 72,
			title: "What's Up?",
			artist: '4 Non Blondes',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 73,
			title: 'Love Bites (So Do I)',
			artist: 'Halestorm',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 74,
			title: 'Sober',
			artist: 'TOOL',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 75,
			title: 'Wrong Way',
			artist: 'Sublime',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 76,
			title: 'One Way Or Another',
			artist: 'Blondie',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 77,
			title: 'Living After Midnight',
			artist: 'Judas Priest',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 78,
			title: 'What I Like About You',
			artist: 'The Romantics',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 79,
			title: 'Mr. Brightside',
			artist: 'The Killers',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 80,
			title: 'Fire',
			artist: 'Jimi Hendrix',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 81,
			title: 'Rock and Roll',
			artist: 'Led Zeppelin',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 82,
			title: 'Last Resort',
			artist: 'Papa Roach',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 83,
			title: 'The Middle',
			artist: 'Jimmy Eat World',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 84,
			title: 'Whole Lotta Rosie',
			artist: 'AC/DC',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 85,
			title: 'Bad Reputation',
			artist: 'Joan Jett & the Blackhearts',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 86,
			title: "Runnin' Down A Dream",
			artist: 'Tom Petty',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 87,
			title: 'You Wreck Me',
			artist: 'Tom Petty',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 88,
			title: 'The Trooper',
			artist: 'Iron Maiden',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 89,
			title: 'Bad Girlfriend',
			artist: 'Theory of a Deadman',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 90,
			title: 'Careless Whisper',
			artist: 'Seether',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	],
	[
		{
			id: 91,
			title: 'She Hates Me',
			artist: 'Puddle Of Mudd',
			songLength: timeToSeconds('0:00'),
			tags: ['rock'],
			key: 'H',
			drop: 0
		}
	]
];
