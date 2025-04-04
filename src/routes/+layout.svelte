<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="default-margin">
	{@render children()}
</div>

<style>
	.default-margin {
		margin-left: 5vw;
		margin-right: 7vw;
	}
</style>
