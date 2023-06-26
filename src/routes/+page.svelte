<svelte:head>
    <title>&#060;kayt.dev/&#062;</title>
    <meta name="description" content="a place for all the things i do">
    <meta name="keywords" content="kayt,dev,webdev,js,ts,svelte,jamstack">
</svelte:head>

<script>
	export let data;
	let { posts } = data;
    let latestPost = posts[0]

    let number = Math.floor(Math.random()*2)
</script>

<div class="container">
    <div class="header">
        <span>
            <img src="/images/kaytwaSmug.png" alt="" width="64" style="margin-right: 1rem; border-radius:99%">
            <div class="name">
                <h1 id="top" style="padding: 0 !important; margin-top:.4rem;">hi! i'm kayt!</h1>
                <b><small>she/they ⚧️</small></b>
            </div>
        </span>
    </div>
    <div class="me">
        <div>
            <h2>who am i?</h2>
            <p>resident vtuber programmer artist girlthing</p>
        </div>
        <div>
            <h2>languages</h2>
            <p>en_US 🇺🇸</p>
            <p>leren nl_NL 🇳🇱</p>
        </div>
        <div>
            <h2>programming</h2>
            <p><b>web</b>: svelte + typescript</p>
            <p><b>node</b>: type + javascript</p>
            <p><b>desktop</b>: python*</p>
            <small>*but only a little</small>
        </div>
        <div>
            <h2>art</h2>
            <p>i have a <a href="/portfolio">portfolio</a>!</p>
            <br>
            <p><b>illustration</b>: krita</p>
            <p><b>photography</b>: lightroom, rawTherapee</p>
            <p><b>vector</b>: affinity designer</p>
        </div>
        <div>
            <h2>videos</h2>
            <p><a href="https://youtube.com/@kayt_was_taken">videos</a> sometimes</p>
            <p><a href="https://twitch.tv/kayt_was_taken">streams</a> weekly*</p>
            <small>*most of the time</small>
        </div>
        <!-- Latest post -->
        <div>
            <h2>latest blog post</h2>
            <a href=/blog/{latestPost.slug}><h3>{latestPost.title}</h3></a>
            <small>{latestPost.date}</small><br>
            <small>{latestPost.excerpt}</small>
        </div>
    </div>
    <div class="sidebar">
        <h3>things</h3>
        <a class="link" href="https://youtube.com/@kayt_was_taken">youtube</a>
        <a class="link" href="https://twitch.tv/kayt_was_taken">twitch</a>
        <a class="link" href="https://github.com/kaytwastaken">github</a>
        <a class="link" href="https://kayt.dev/rss">RSS feed</a>
        {#if number == 0}
            <a href="https://en.wikipedia.org/wiki/Kill_la_Kill"><img src="https://media.tenor.com/IeeaaqOJKS4AAAAC/ryuko-matoi-kill-la-kill.gif" alt="A looping gif of Ryuko Matio from the anime Kill La Kill looking towards the viewer while pink flower petals fall through frame."></a>
        {:else if number == 1}
            <a href="https://en.wikipedia.org/wiki/Otherside_Picnic"><img src="https://media.tenor.com/yGGSMt5Nih0AAAAC/otherside-picnic-urasekai-picnic.gif" alt="A looping gif of the characters Toriko Nishina and Sorawo Kamikoshi from the anime Otherside Picnic."></a>
        {/if}
    </div>
    <div class="badges">
        <span><p>Made with <a href="https://kit.svelte.dev/">SvelteKit</a>, no sleep, and 🖤</p></span>
        <span>All content on this site is<a id="ai-badge" href="https://notbyai.fyi"><img src="/images/Written-By-Human-Not-By-AI-Badge-black.svg" alt="written by human, not by AI"></a></span>

        <!-- <ul>
            <a href="https://cyber.dabamos.de/88x31" target="_blank" rel="noreferrer"><li><img src="https://kayt.dev/static/88x31.gif" alt=""></li></a>
            <li><img src="https://kayt.dev/static/webpassion.gif" alt=""></li>
            <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noreferrer"><li><img src="https://kayt.dev/static/firefox4.gif" alt=""></li></a>
            <a href="https://yesterweb.org/no-to-web3/" target="_blank" rel="noreferrer"><li><img src="https://kayt.dev/static/keep.gif" alt=""></li></a>
            <li><img src="https://kayt.dev/static/antinft.gif" alt=""></li>
            <a href="https://archive.org" target="_blank" rel="noreferrer"><li><img src="https://kayt.dev/static/copy_floppy.gif" alt=""></li></a>
            <li><img src="https://kayt.dev/static/piracy.gif" alt=""></li>
            <li><img src="https://kayt.dev/static/bvwe.gif" alt=""></li>
            <a href="https://en.pronouns.page/@kayt_was_taken" target="_blank" rel="noreferrer"><li><img src="https://kayt.dev/static/queer.png" alt=""></li></a>
            <a href="https://en.pronouns.page/@kayt_was_taken" target="_blank" rel="noreferrer"><li><img src="https://kayt.dev/static/trans-pride-88x31.gif" alt=""></li></a>
            <li><img src="https://kayt.dev/static/transnow2.gif" alt=""></li>
            <li><img src="https://kayt.dev/static/slimesnow.png" alt=""></li>
            <li><img src="https://kayt.dev/static/forever_online.gif" alt=""></li>
        </ul> -->
    </div>

</div>

<style lang="scss">
    @import "src/style/app.scss";
    .container {
        width: 50vw;
        @include descending-width;
        margin-left: auto;
        margin-right: auto;
        
        display: grid;
        gap: 1rem;
        grid-template-areas: 
        'header header header'
        'main main right'
        'badges badges badges';

        @include sm-screen {
            grid-template-areas: 
            'header'
            'main'
            'right'
            'badges';
        }
        

        .header {
            grid-area: header;
        }
        .me {
            grid-area: main;
            // width: 100%;

            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            justify-content: space-between;

            div {
                flex-grow: 1;
            }

        }
        .sidebar {
            grid-area: right;
            display: flex;
            flex-direction: column;
            height: calc(100% - 2rem);

            .link, img {
                padding: .5rem;
                border: 2px solid $bg;
                border-radius: .5rem;
                margin: .1rem;
            }
            .link:hover, img:hover {
                background-color: $bg-tertiary;
            }
            a > img {
                width: 12rem;
            }
        }
        .badges {
            grid-area: badges;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                padding: 0 .5rem 0 .5rem;
            }
            span + span {
                border-left: 2px solid $bg-tertiary;
            }
            @include sm-screen {
                flex-direction: column;
                span {
                    padding: .5rem 0 .5rem 0;
                }
                span + span {
                    border-left: none;
                    border-top: 2px solid $bg-tertiary;
                }
            }
        }

        #ai-badge img {
            padding: .3rem 0 0 1rem;
            @include sm-screen {
                padding: .1rem 0 0 0;
            }
        }
        
        div:not(.me, .name) {
            // width: 50vw;
            padding: .75rem;
            background-color: $bg-secondary;
            border-radius: 1rem;
            border: 2px solid $bg-tertiary;

            span {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        li {
            margin: .25rem;
        }
    }
</style>