<script lang="ts">
    export let post:any;
</script>

<div>
    <a href={post.metadata.link}>
        {#if post.metadata.artfol}
            <span class="overlay">available on artfol</span>
        {/if}
        <img src={post.metadata.src} alt="">
    </a>
    {#if post.metadata.info !== undefined}
        <p class="info">{post.metadata.info}</p>
    {/if}
</div>

<style lang="scss">
    @import "src/style/app.scss";

    div {
        background-color: $bg-secondary;
        height: min-content;
        margin: .75rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid $bg-tertiary;
        h1 {
            padding: 0;
        }
    }
    div:hover {
        margin: .5rem;
        padding: 1.25rem;
        a {
            .overlay {
                opacity: 100%;
            }
        }
        .info {
            display: block;
        }
    }
    a {
        img {
            max-width: 100%;
        }
    }
    .overlay {
        opacity: 0;
        padding: 1rem;
        position: absolute;
        font-size: 1.5rem;
        font-weight: 600;
        background-color: $bg-secondary;
        transform: rotate(.25turn) translate(39%, 180%);
    }
    .info {
        display: none;
    }

</style>