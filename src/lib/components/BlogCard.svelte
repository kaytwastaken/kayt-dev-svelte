<script lang="ts">
    export let post:any
</script>

<div>
    <a href="/blog/{post.postPath}">
        <h2>{post.metadata.title}</h2>
        <small>published: {post.metadata.date}</small>
        <p></p>
        <p>{post.metadata.excerpt ? post.metadata.excerpt : ""}</p>
    </a>
</div>
<style lang="scss">
    @import "src/style/app.scss";

    div {
        background-color: $bg-secondary;
        
        margin: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        h1 {
            padding: 0;
        }
    }
    div:hover {
        background-color: $bg-tertiary;
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