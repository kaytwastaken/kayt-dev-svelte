
export const load = async ({fetch}) => {
    const projects = await fetch('/api/projects.json')
    const allProjects = await projects.json()

    return {
    projects: allProjects
}
}
