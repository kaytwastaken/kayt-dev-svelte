<footer>
    <div>
        <a href="https://pk.kayt.dev">PK-web</a>
        <a href="https://twitter.com/kayt_was_taken">Twitter</a>
        <a href="https://github.com/kaytwastaken">Github</a>
        <a href="/credits">Open source credits</a>
    </div>
</footer>

<style lang="scss">
    footer {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        div {
            border-top: 2px solid $bg-secondary;
            padding-top: 1rem;
            width: 50vw;
            
            @include descending-width;
            
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 2em 2em;
            justify-items: center;

            @include xs-screen {
                grid-template-columns: 1fr 1fr 1fr;
            }

        }
    }
</style>