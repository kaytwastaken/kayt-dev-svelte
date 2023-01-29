<svelte:head>
    <title>&#060;Kayt.dev/&#062;</title>
    <meta name="description" content="a place for all the things i do">
    <meta name="keywords" content="kayt,dev,webdev,js,ts,svelte,jamstack">
</svelte:head>

<div class="container">
    <div>
        <span>
            <img src="/images/brown_blue_picrew.png" alt="" width="64">
            <h1>hi! i'm kayt<sub>she/they</sub>!</h1>
        </span>
        <p>you probably know me as kaytastrophe, kayt_was_taken, or another one of my derivative usernames, but you've found your way to my corner of the internet!</p>
    </div>
    <div>
        <h2>who be i?</h2>

        <p>many things - but mostly, a gay who often gays, an artist who rarely arts, a programmer who rarely programs, and a student who rarely studies</p>

            <br>

        <p>as for languages, most of my work is in svelte and ts but i also work w/ python</p>
        <p>for human languages, english is obviosuly my first language but i have limited knowlegde in japanese and eventually want to learn dutch and asl</p>

            <br>

        <span>
            <a href="https://twitter.com/kayt_was_taken">birded site</a><br>
            <a rel="me" href="https://toot.community/@kayt">masted don</a><br>
            <a href="https://www.artfol.me/kayt_was_taken">arted fol</a>
            <a href="https://github.com/kaytwastaken">gitted hub</a>
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