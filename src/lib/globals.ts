import type { Post } from './types'

export async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        // if the file exsits
        // and its an obj
        // and metadata exists in the file
        // and it has a slug
        if (file && typeof file === 'object' && 'metadata' in file && 'default' in file && slug) {
            // process it accordingly
            const metadata = file.metadata as Omit<Post, 'slug'> // metadata IS a post BUT WITHOUT the slug param
            const content = file.default
            const post = {...metadata, slug, content} satisfies Post // we can just say that `post` satisfies the Post object
            post.archive == false && posts.push(post)

        }

        posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
    }

    return posts
}