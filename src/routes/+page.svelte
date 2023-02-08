<svelte:head>
    <title>&#060;Kayt.dev/&#062;</title>
    <meta name="description" content="a place for all the things i do">
    <meta name="keywords" content="kayt,dev,webdev,js,ts,svelte,jamstack">
</svelte:head>

<div class="container">
    <div>
        <span>
            <img src="/images/smug bitch.png" alt="" width="64" style="margin-right: 1rem;">
            <div>
                <h1 style="padding: 0 !important;">hi! i'm kayt!</h1>
                <b><small>it/ze/hir/she/they</small></b>
            </div>
        </span>
        <p>you probably know me as kaytastrophe, kayt_was_taken, or another one of my derivative usernames, but you've found your way to my corner of the internet!</p>
    </div>
    <div>
        <h2>who be i?</h2>

        <p>gay programmer artist girlthing</p>

            <br>
        <h2>what do?</h2>

        <p>i program make art and play vidya</p>
        <p>sometimes i like to pretend im good at making videos and/or streaming</p>
        <p>links for all the stuff are down there</p>
        
            <br>
        <h2>languages?</h2>
        <p>i work mostly in svelte and ts but i also know some python</p>
        <p>for human languages, english is obviosuly my first language but i have limited knowlegde in japanese and eventually want to learn dutch and asl</p>

            <br>

        <span>
            <a href="https://twitter.com/kayt_was_taken">birded site</a><br>
            <a rel="me" href="https://toot.community/@kayt">masted don</a><br>
            <a href="https://www.artfol.me/kayt_was_taken">arted fol</a>
            <a href="https://github.com/kaytwastaken">gitted hub</a>
            <a href="https://youtube.com/@kayt_was_taken">you'd tube</a>
            <a href="https://twitch.tv/kayt_was_taken">twitched tv</a>
        </span>
    </div>

</div>

<ul class="badges">
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

<style lang="scss">
    @import "src/style/app.scss";
    .container {
        div {
            width: 50vw;

            @include descending-width;
            span {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }
    }
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        li {
            margin-right: 1rem;
        }
    }
    span {
        a {
            margin-right: 1rem;
        }
    }
    .badges {
        width: 50vw;
        @include descending-width;
        flex-wrap: wrap;
        margin: 0 auto 0 auto;
        justify-content: center;
        li {
            margin-bottom: .5rem;
        }
    }
</style>