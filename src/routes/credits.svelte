<svelte:head>
    <title>Credits | kayt.dev</title>
    <meta name="description" content="open source credits">
    <meta name="keywords" content="kayt,dev,open,source,js,ts,svelte,jamstack">
</svelte:head>

<div class="container">
    <div>
        <h1>Open source software</h1>
        <small>If I'm not listing something here that I should please lmk!</small>
        <div>
            <a href="https://github.com/sveltejs/svelte">Svelte</a>
            <a href="https://github.com/sveltejs/kit">SvelteKit</a>
            <a href="https://github.com/pngwn/mdsvex">MDsveX</a>
            <a href="https://github.com/sass">Sass</a>
        </div>

        <h1>Fonts used</h1>
        <div>
            <a href="https://fonts.google.com/specimen/Raleway">Raleway</a>
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        div {
            width: 50vw;
            @include descending-width;

            display: flex;
            flex-direction: column;

            small {
                margin-top: -1rem;
            }

            div {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr; 
            }
        }
    }
</style>