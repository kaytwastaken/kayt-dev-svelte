<script lang="ts">
    export let data:any;
</script>

<div class="container">
    <div>
        <h1>{ data.title }</h1>
        <p>published: { data.date }</p>
        <svelte:component this={data.content} />
    </div>
</div>

<style lang="scss">
    @import "src/style/app.scss";
    
    .container {
        div {
            width: 50vw;
            @include descending-width;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        :global(p) {
            padding: .5rem 0 .5rem 0;
            line-height: 1.5rem;
        }
        :global(blockquote) {
            margin: .5rem 0 1rem 1rem;
            padding: 0 1rem 0 1rem;
            border-left: 2px solid $accent-main;
            background-color: $bg-secondary;
        }
        :global(h2) {
            padding-bottom: .5rem 0 .5rem 0;
        }
        :global(h2)::before {
            font-style: normal;
            content: "##";
            margin-right: .5rem;
            color: $bg-secondary;
        }
        :global(h3) {
            padding: .5rem 0 .5rem 0;
        }
        :global(h3)::before {
            font-style: normal;
            content: "###";
            margin-right: .5rem;
            color: $bg-secondary;
        }
        :global(h4) {
            padding: .5rem 0 .5rem 0;
        }
        :global(h4)::before {
            font-style: normal;
            content: "####";
            margin-right: .5rem;
            color: $bg-secondary;
        }
        :global(ul) {
            padding: 0;
        }
        :global(li) {
            padding: .1rem;
            margin: 0 0 0 1.5rem;
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
            line-break: auto;
            overflow-x: scroll;
        }
        :global(img) {
            max-width: 100%;
        }
        :global(hr) {
            margin: 0 5px 1rem 5px;
        }
    }
</style>