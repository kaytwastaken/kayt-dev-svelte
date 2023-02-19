export function load() {
    const imports = import.meta.glob('../posts/*.md', { eager: true });

    // console.log(imports)
    const posts = []
    for (const path in imports) {
        const post = imports[path]
        // @ts-ignore
        // if not archived
        if (! post.metadata.archive) {
            // TODO fix type errors :')
            // @ts-ignore
            const metadata = post.metadata
            const postPath = path.slice(9,-3)
            posts.push({
                metadata,
                postPath
            });
        }
        
    }

    // console.log(posts)

    posts.sort((a, b) => {
        return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    })

    return {posts}

}
