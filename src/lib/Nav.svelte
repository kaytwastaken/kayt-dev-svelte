<nav>
    <a href="/">
        <span>
            <img src="/images/brown_blue_picrew.png" alt="" width="64">
            <h1 class="header">&#060;Kayt.dev/&#062;</h1>
        </span>
    </a>
    <span>
        <a sveltekit:prefetch href="/">Home</a>
        <!-- <a sveltekit:prefetch href="/about">About</a> -->
        <a href="/blog">Blog</a>
        <a sveltekit:prefetch href="/projects">Projects</a>
    </span>
</nav>

<style lang="scss">
    nav {
        // background-color: $bg-secondary;
        // padding: 0 33vw 0 33vw;
        color: $text;
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 2rem;
        align-items: center;
        flex-direction: row;

        @include xs-screen{
            flex-direction: column;
            align-items: flex-start;
        }

        * {
            padding: .5rem;
        }
        .header {
            background-image: $grad-logo;
            color:transparent;
            -webkit-background-clip: text;
            background-clip: text;
        }
        a {
            text-decoration: none;
        }
        span {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            * {
                padding: 0 1rem 0 1rem;
            }
            a {
                padding: 1rem 1rem 1rem 1rem;
                border-bottom: 2px solid $bg-secondary;
            }
            a:hover {
                border-bottom: 2px solid $pink;
            }
        }
        img {
            display: unset;
            @include xs-screen {
                display: none;
            }
        }
    }
    
</style>