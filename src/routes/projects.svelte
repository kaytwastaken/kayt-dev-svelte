<script lang="ts" context="module">
    export const load = async ({fetch}) => {
        const projects = await fetch('/api/projects.json')
        const allProjects = await projects.json()

        return {
            props: {
                projects: allProjects
            }
        }
    }
</script>

<script>
    export let projects
</script>

<ul class="container">
    {#each projects as project}
        <li>
            <div>
                <h2>
                    {project.meta.title}
                </h2>
                <a href={project.path}> Details</a>
                <a href={project.meta.link}>Project page</a>
            </div>
            <h3>{project.meta.desc ? project.meta.desc : ""}</h3>
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
            width: 50vw;

            @include descending-width;

            h1,h2,h3 {
                padding-bottom: 0;
            }
            div {
                padding: 0;
                margin-bottom: .5rem;
                a {
                    margin-right: .5rem;
                }
            }
        }
    }
</style>