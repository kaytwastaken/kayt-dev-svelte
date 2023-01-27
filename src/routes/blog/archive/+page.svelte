<script lang="ts">
    export let data;
	let { posts } = data;
    import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<div class="container">
    <div>
        <h2>Blog Archive</h2>
        <p>basically the posts that I don't like enough to feature, but don't dislike enough to delete</p>
        <a href="/blog">back to the good stuff</a>
    </div>
    <div class="posts">
        {#each posts as post}
            <BlogCard {post} />
        {/each}
    </div>
</div>

<style lang="scss">
    @import "/src/style/app.scss";

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