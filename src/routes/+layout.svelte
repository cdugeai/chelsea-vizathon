<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="default-margin">
	{@render children()}
</div>
<Footer />

<style>
	.default-margin {
		margin-left: 5vw;
		margin-right: 7vw;
	}
</style>
