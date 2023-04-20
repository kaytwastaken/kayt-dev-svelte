<svelte:head>
    <title>&#060;Kayt.dev/&#062;</title>
    <meta name="description" content="a place for all the things i do">
    <meta name="keywords" content="kayt,dev,webdev,js,ts,svelte,jamstack">
</svelte:head>

<script>
	export let data;
	let { posts } = data;
    let latestPost = posts[0]
</script>

<div class="container">
    <div class="header">
        <span>
            <img src="/images/smug bitch.png" alt="" width="64" style="margin-right: 1rem;">
            <div class="name">
                <h1 style="padding: 0 !important;">hi! i'm kayt!</h1>
                <b><small>it/ze/hir/she/they</small></b>
            </div>
        </span>
        <p>you probably know me as kaytastrophe, kayt_was_taken, or another one of my derivative usernames, but you've found your way to my corner of the internet!</p>
    </div>
    <div class="me">
        <div>
            <h2>who be i?</h2>
            <p>gay programmer artist girlthing</p>
        </div>
        <div>
            <h2>what do?</h2>
            <p>i program make art and play vidya</p>
            <p>sometimes i like to pretend im good at making videos and/or streaming</p>
            <p>links for all the stuff are on the side</p>
        </div>
        <div>
            <h2>languages?</h2>
            <p>i work mostly in svelte and ts but i also know some python</p>
            <p>for human languages, english is obviosuly my first language but i have limited knowlegde in japanese and eventually want to learn dutch and asl</p>
        </div>
        <div>
            <h2>latest blog post</h2>
            <a href=/blog/{latestPost.postPath}><h3>{latestPost.metadata.title}</h3></a>
            <small>{latestPost.metadata.date}</small><br>
            <small>{latestPost.metadata.excerpt}</small>
        </div>
    </div>
    <div class="sidebar">
        <h3>stuff here</h3>
        <a class="link" href="/blog">blog</a>
        <a class="link" href="/manifesto">internet manifesto</a>
        <h3>stuff elsewhere</h3>
        <a class="link" href="https://twitter.com/kayt_was_taken">birded site</a>
        <a class="link" rel="me" href="https://toot.community/@kayt">masted don</a>
        <a class="link" href="https://www.artfol.me/kayt_was_taken">arted fol</a>
        <a class="link" href="https://github.com/kaytwastaken">gitted hub</a>
        <a class="link" href="https://youtube.com/@kayt_was_taken">you'd tube</a>
        <a class="link" href="https://twitch.tv/kayt_was_taken">twitched tv</a>
    </div>
    <div class="badges">
        <ul>
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
        </ul>
    </div>

</div>

<style lang="scss">
    @import "src/style/app.scss";
    .container {
        width: 50vw;
        margin-left: auto;
        margin-right: auto;
        
        display: grid;
        gap: 1rem;
        grid-template-areas: 
        'header header header'
        'main main right'
        'badges badges badges';

        

        .header {
            grid-area: header;
        }
        .me {
            height: calc(100%);
            grid-area: main;

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

            .link {
                padding: .5rem;
                border: 2px solid $bg;
                border-radius: .5rem;
                margin: .1rem;
            }
            .link:hover {
                background-color: $bg-tertiary;
            }
        }
        .badges {
            grid-area: badges;
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
    span {
        a {
            margin-right: .5rem;
        }
    }
</style>