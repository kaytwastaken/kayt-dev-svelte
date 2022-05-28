<script lang='ts'>
    export let title:string
    export let date:string
    export let excerpt:string
</script>
  
<svelte:head>
    <title>{title} | kayt.dev</title>
    <meta name="description" content={excerpt} />
    <meta name="keywords" content={title.split(" ").join(",")}>
</svelte:head>

<div class="container">
    <h1>{title}</h1>
    <small>Published: {date}</small>
    <div>
        <slot />
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        * {
            padding: 0 0 1rem 0;
            width: 50vw;

            @include descending-width;

            :global(p) {
                padding-top: 1rem;
                line-height: 1.3rem;
            }
            :global(blockquote) {
                margin: .5rem 0 1rem 1rem;
                padding: 1rem .5rem 0 1rem;
                border-left: 2px solid $orange;
                background-color: $bg-secondary;
            }
            :global(h2) {
                margin-bottom: .5rem;
            }
            :global(h3) {
                margin-bottom: .5rem;
            }
            :global(ul) {
                margin-bottom: 1rem;
            }
            :global(li) {
                margin-left: 1.5rem;
            }
            :global(code) {
                font-family: 'Courier New', Courier, monospace;
                background-color: $bg-secondary;
                padding: .25rem;
                border-radius: 5px;
                line-height: 1.3rem;
            }
            :global(pre) {
                font-family: 'Courier New', Courier, monospace;
                background-color: $bg-secondary;
                padding: .25rem;
                border-radius: 5px;
                max-width: fit-content;
                margin-bottom: .5rem;
            }
            :global(img) {
                width: 50vw;

                @include descending-width;
            }
            :global(hr) {
                margin: 0 5px 1rem 5px;
            }
        }
    }
</style>