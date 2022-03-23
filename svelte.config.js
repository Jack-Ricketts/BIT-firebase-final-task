import adapter from '@sveltejs/adapter-auto';
import firebase from "svelte-adapter-firebase";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: firebase(),
	},
};

export default config;
