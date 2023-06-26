<script lang="ts">
    import type { Post } from '$lib/types'
    export let post:Post;
</script>

<div>
    <a href="/blog/{post.slug}">
        <h2>{post.title}</h2>
        <small>published: {post.date}</small>
        <p></p>
        <p>{post.excerpt ? post.excerpt : ""}</p>
    </a>
</div>
<style lang="scss">
    @import "src/style/app.scss";

    div {
        background-color: $bg-secondary;
        
        margin: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid $bg-tertiary;
        h1 {
            padding: 0;
            line-height: 110%;
        }
    }
    div:hover {
        // background-color: $bg-tertiary;
        margin: .5rem;
        padding: 1.5rem;
    }
    a {
        text-decoration: none;
        h2 {
            color: $accent-main;
        }
    }

</style>