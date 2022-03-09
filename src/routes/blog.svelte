<script lang="ts" context="module">
    export const load = async ({fetch}) => {
        const posts = await fetch('/api/posts.json')
        const allPosts = await posts.json()

        return {
            props: {
                posts: allPosts
            }
        }
    }
</script>

<script>
    export let posts
</script>

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
        display: flex;
        flex-direction: column;
        align-items: center;
        * {
            padding: 0 0 1rem 0;
        }
        li {
            list-style: none;
            width: 50vw;
            background-color: $bg-secondary;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            h1,h2,h3 {
                padding-bottom: 0;
            }
        }
    }
</style>