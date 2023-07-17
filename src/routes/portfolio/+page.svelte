<script>
    export let data;
	let { posts } = data;
    import PortfolioCard from '$lib/components/PortfolioCard.svelte';
</script>

<div class="container">
    <div>
        <h2>my portfolio!</h2>
        <p>some of my best art!</p>
        <p>everything here is also available on <a href="https://artfol.me/kayt_was_taken">artfol</a></p>
        <span id="disclaimer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0
                512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24
                24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32
                32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
            </svg>
            <p>this page is best viewed with firefox and the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout">experimental masonry flag</a> enabled</p>
        </span>
        <a id="ai-badge" href="https://notbyai.fyi"><img src="/images/Painted-By-Human-Not-By-AI-Badge-black.svg" alt="written by human, not by AI"></a>
    </div>
    <div class="posts">
        {#each posts as post}
            <PortfolioCard {post} />
        {/each}
    </div>

</div>

<style lang="scss">
    @import "src/style/app.scss";

    .container {
        div {
            width: 75vw;
            @include descending-width;
        }
        .posts {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: masonry;
            @include lg-screen {
                grid-template-columns: 1fr 1fr;
            }
            @include sm-screen {
                grid-template-columns: 1fr;
            }
        }
        #disclaimer {
            margin: .25rem;
            display: flex;
            align-items: center;
            svg {
                width: 1.5rem;
                margin-right: .5rem;
                path {
                    fill: $accent-main;
                }
            }
            @include sm-screen {
                display: none;
            }
        }

        #ai-badge img {
            padding: 1rem 0 .5rem 0;
        }
    }
</style>
