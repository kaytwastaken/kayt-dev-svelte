<script>
	export let data;
	let { posts } = data;
    import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<div class="container">
    <div>
        <h2>my blog!</h2>
        <p>my general musings whenever i (rarely) happen to write something</p>
        <p>more (older and less good) posts in the <a href="/blog/archive">archive</a></p>
        <a href="https://kayt.dev/rss">RSS</a>
    </div>
    <div class="posts">
        {#each posts as post}
            <BlogCard {post} />
        {/each}
    </div>

</div>

<style lang="scss">
    @import "src/style/app.scss";

    .container {
        div {
            width: 50vw;
            @include descending-width;
        }
        .posts {
            display: grid;
            grid-template-columns: 1fr 1fr;
            @include sm-screen {
                grid-template-columns: 1fr;
            }
        }
    }
</style>
