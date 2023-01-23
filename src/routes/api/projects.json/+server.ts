export const get = async () => {
    const allProjectFiles = import.meta.glob('../projects/*.md')
    const iterableProjectFiles = Object.entries(allProjectFiles)

    const allProjects = await Promise.all(
        iterableProjectFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(2, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return {
        status: 200,
        body: allProjects
    }
}