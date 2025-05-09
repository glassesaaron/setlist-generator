import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			relative: false,
			base: '/setlist-generator'
		},
		output: {
			bundleStrategy: 'inline'
		}
	}
};

export default config;
