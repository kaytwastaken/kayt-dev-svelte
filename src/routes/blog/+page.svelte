

<script>
    export let posts
</script>

<svelte:head>
    <title>Blog | kayt.dev</title>
    <meta name="description" content="my blog!">
    <meta name="keywords" content="kayt,dev,blog,js,ts,svelte,webdev,developer">
</svelte:head>

<ul class="container">
    {#each posts as post}
        <li>
            <h2>
                <a href={post.path}>
                    {post.meta.title}
                </a>
            </h2>
            <small>Published: {post.meta.date}</small>
            <h3>{post.meta.excerpt ? post.meta.excerpt : ""}</h3>
        </li>
    {/each}
</ul>

<style lang="scss">
    .container {
        li {
            list-style: none;
            background-color: $bg-secondary;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            h2,h3 {
                padding-bottom: 0;
            }
            width: 50vw;

            @include descending-width
        }
    }
</style>