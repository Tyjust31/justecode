import adapter from '@sveltejs/adapter-vercel'; // Ton choix Vercel
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// ✅ C'est cette ligne qui manque sûrement !
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;