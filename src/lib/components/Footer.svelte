<script lang="ts"></script>

{#snippet footer_link(text: string, url: string)}
	<a href={url} target="_blank" class="hover:underline">{text}</a>
{/snippet}

<footer class="footer mt-s bg-black pt-4 pb-8 text-white">
	<div class="footer-container flex flex-col items-center">
		<a
			href="https://www.linkedin.com/in/colin-dugeai/"
			class="logo text-8xl font-extrabold md:text-5xl pb-4">CD</a
		>
		<div class="flex items-center">
			<h3 class="semi-bold mb-xs text-white text-red-500">Colin Dugeai</h3>
		</div>
		<div class="mb-m flex gap-6">
			{@render footer_link('Linkedin', 'https://www.linkedin.com/in/colin-dugeai/')}
			{@render footer_link('Github', 'https://github.com/cdugeai/')}
			{@render footer_link('Resume', 'https://rxresu.me/cdugeai/colin-du')}
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: rgb(0, 12, 73);
	}
	.logo {
		font-family: 'Brush Script MT', Courier, monospace;
	}
</style>
