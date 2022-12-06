<script lang="ts">
	import type { PageData } from './$types';
	import Github from '$$/GithubIcon.svelte';
	import Linkedin from '$$/LinkedinIcon.svelte';

	const icon_size = 22;

	export let data: PageData;
</script>

<div class="flex-center">
	<main class="container">
		<h1 class="unit-0">Hi, I'm Excel</h1>
		<h4 class="top-gap-0 light-font">
			Software Engineer specialized in building API and writing automation script
		</h4>
		<a href="https://github.com/ky64" target="_blank" rel="noreferrer">
			<Github width={icon_size} height={icon_size} />
		</a>
		&nbsp;
		<a href="https://www.linkedin.com/in/excel-d-515b391a5/" target="_blank" rel="noreferrer">
			<Linkedin width={icon_size} height={icon_size} />
		</a>
		<section>
			{#each Object.values(data) as post}
				<h5>
					<a href={post.slug}>{post.title}</a>
				</h5>
				<small class="top-gap-0">{post.create_date}</small>
				<p class="top-gap-0">{post.description}</p>
			{/each}
		</section>
	</main>
</div>
