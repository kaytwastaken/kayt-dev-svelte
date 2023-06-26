export type Post = {
	default: any
    content: any
    // ^ is fucked
    title: string
    slug: string
    excerpt: string
    date: string
    archive: boolean
}