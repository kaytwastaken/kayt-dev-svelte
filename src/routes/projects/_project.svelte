<script>
    export let title
    export let status
</script>
  
<svelte:head>
    <title>Kayt.dev | {title}</title>
</svelte:head>

<div class="container">
    <h1>{title}</h1>
    <small>Status: {status}</small>
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
                padding-bottom: 1rem;
            }
            :global(blockquote) {
                margin: .5rem 0 1rem 1rem;
                padding: 1rem .5rem 0 1rem;
                border-left: 2px solid $orange;
            }
            :global(ul) {
                margin-top: .5rem;
            }
            :global(li) {
                margin-left: 1.5rem;
            }
            :global(code) {
                font-family: 'Courier New', Courier, monospace;
                background-color: $bg-secondary;
                padding: .25rem;
                border-radius: 5px;
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
            :global(h2) {
                padding-bottom: 1rem;
            }
        }
    }
</style>