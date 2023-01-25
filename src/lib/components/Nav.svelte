<nav id="nav">
    <a href="/">
        <h1>&#060;kayt.dev/&#062;</h1>
    </a>
    <span>
        <a href="/">home</a>
        <a href="/blog">blog</a>
    </span>
</nav>

<style lang="scss">
    @import "src/style/app.scss";
    
    nav {
        margin: auto;
        width: 50vw;
        @include descending-width;
        color: $text;
        display: flex;
        justify-content: space-between;
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
        h1 {
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
            justify-content: space-around;
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
            img {
                padding: 0;
            }
        }
    }
    
</style>