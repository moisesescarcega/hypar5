<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div>
	<Header />

	<main>
		{@render children()}
	</main>

	<footer class="fixed bottom-0 py-1 w-full bg-gray-600 text-white text-center">
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	footer a {
		font-weight: bold;
	}
</style>
