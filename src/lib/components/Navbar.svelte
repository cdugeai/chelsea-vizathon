<script lang="ts">
	let dispLogo: boolean = false;
</script>

<div class="container justify-center mt-5">
	<div class="flex gap-8 items-center">
		{#if dispLogo}
			<a
				href="https://www.linkedin.com/in/colin-dugeai/"
				class="logo text-8xl font-extrabold md:text-5xl pb-4">CD</a
			>
			<p class="x-logo text-8xl font-light md:text-3xl pb-4">X</p>
		{/if}

		<div class="container-logo">
			<img
				src="https://chelsea-fc-performance-insights.github.io/Competition/assets/img/logo/logo.svg"
				alt="logo-chelse-fc"
			/>
		</div>
	</div>

	<div class="container-title flex items-center mx-12 text-2xl">
		<p class="font-cfc">CFC Performance <br />Insights Vizathon</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
	}

	.container-logo {
		width: 100px;
		height: 100px;
		margin-right: 30px;
	}

	.container-title {
		flex-grow: 0;
	}

	@font-face {
		font-family: CFCSerif;
		font-weight: bold;
		src: url('https://chelsea-fc-performance-insights.github.io/Competition/assets/fonts/CFCSerif-Bold.otf')
			format('opentype');
	}
	.font-cfc {
		font-family: CFCSerif, serif;
	}
	.logo {
		font-family: 'Brush Script MT', Courier, monospace;
	}
	.x-logo {
		font-family: Baghdad, Courier, monospace;
	}
</style>
