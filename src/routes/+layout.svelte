<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div>
	<!-- <Header /> -->

	<main>
		{@render children()}
	</main>

	<footer class="fixed bottom-0 py-1 w-full bg-gray-600 text-white text-center text-xs md:text-base lg:text-md">
		<p>
			<a href="https://github.com/moisesescarcega/hypar5">GitHub repository</a> | &copy; 2025 under MIT License.
		</p>
	</footer>
</div>

<style>
	footer a {
		font-weight: bold;
		color:rgb(125, 179, 230);
	}
</style>
