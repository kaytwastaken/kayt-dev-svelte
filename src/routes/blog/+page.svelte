<script>
	export let data;
	let { posts } = data;
    // console.log(posts)
</script>

hahah

{#each posts as post}
    <h1>{post.metadata.title}</h1>
    <a href={post.postPath}>{post.postPath}</a>
{/each}