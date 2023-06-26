<footer>
    <div>
        <!-- <a href="https://mc.kayt.dev">mc.kayt.dev</a>
        <a href="https://pk.kayt.dev">pk.kayt.dev</a> -->
        <!-- <a href="/licenses">licenses + source</a> -->
        <span>made with svelte and 🖤</span>
    </div>
</footer>

<style lang="scss">
    @import "src/style/app.scss";

    footer {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
        div {
            border-top: 2px solid $bg-secondary;
            padding-top: 1rem;
            width: 50vw;
            
            @include descending-width;
            
            // display: grid;
            // grid-template-columns: 1fr 1fr 1fr;
            // grid-template-rows: 2em 2em;
            // justify-items: center;
            display: flex;
            align-content: center;
            justify-content:space-around;


            @include xs-screen {
                grid-template-columns: 1fr 1fr 1fr;
            }

            a {
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
        }
    }
</style>