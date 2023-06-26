import { json } from "@sveltejs/kit"
import type { Post } from '$lib/types'

async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        // if the file exsits
        // and its an obj
        // and metadata exists in the file
        // and it has a slug
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            // process it accordingly
            const metadata = file.metadata as Omit<Post, 'slug'> // metadata IS a post BUT WITHOUT the slug param
            const post = {...metadata, slug} satisfies Post // we can just say that `post` satisfies the Post object
            post.archive == true && posts.push(post)

        }

        posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
    }

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}