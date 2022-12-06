<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="flex-center">
	<main class="container">
		<h1>{data.title}</h1>
		<em>
			{data.create_date}
			on <a href="/">kymind</a>
		</em>
		<br />
		<br />
		<svelte:component this={data.content} />
		<div align="center">
			<a href="/"> Back to Home </a>
		</div>
	</main>
</div>
