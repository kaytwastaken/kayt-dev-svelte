<svelte:head>
    <title>Credits | kayt.dev</title>
    <meta name="description" content="open source credits">
    <meta name="keywords" content="kayt,dev,open,source,js,ts,svelte,jamstack">
</svelte:head>

<div class="container">
    <div>
        <p>This site's <a href="https://github.com/Kaytwastaken/kayt-dev-svelte">source code</a> is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL v3</a></p>
        
        <h2>Open source software</h2>
        <div>
            <a href="https://github.com/sveltejs/svelte">Svelte</a>
            <a href="https://github.com/sveltejs/kit">SvelteKit</a>
            <a href="https://github.com/pngwn/mdsvex">MDsveX</a>
            <a href="https://github.com/sass/sass">Sass</a>
            <p>All of previous are licensed under the <a href="https://mit-license.org/">MIT License</a></p>
        </div>

        <h2>Fonts used</h2>
        <div>
            <span><a href="https://fonts.google.com/specimen/Raleway">Raleway</a> - <a href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL">Open Font License</a></span>
        </div>
    </div>
</div>

<style lang="scss">
    @import 'src/style/app.scss';
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