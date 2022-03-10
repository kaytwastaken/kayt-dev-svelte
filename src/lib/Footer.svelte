<footer>
    <div>
        <a href="https://pk.kayt.dev">PK-web</a>
        <a href="https://twitter.com/kayt_was_taken">Twitter</a>
        <a href="https://github.com/kaytwastaken">Github</a>
        <a href="https://instagram.com/kayt_was_taken">Instagram</a>
    </div>
</footer>

<style lang="scss">
    footer {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        div {
            border-top: 2px solid $bg-secondary;
            padding-top: 2rem;
            display: flex;
            justify-content: space-around;
            width: 50vw;

            @include descending-width
        }
    }
</style>