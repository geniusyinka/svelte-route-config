import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '../fleek-svelte-adapter/index.js' 


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the Fleek adapter with optional configuration
		adapter: adapter({
		  outDir: '.fleek', // Output directory
		}),
	  },
};

export default config;
