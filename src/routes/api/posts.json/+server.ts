export const get = async () => {
    const allPostFiles = import.meta.glob('../blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(2, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    // return {
    //     status: 200,
    //     body: allPosts.sort((a, b) => {
    //         return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    //     })
    // }

    return new Response(JSON.stringify((a, b) => {
            return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
        }), {
        headers: {
            'content-type': 'application/json; charset=utf-8'
        },
        status: 200
    });
}