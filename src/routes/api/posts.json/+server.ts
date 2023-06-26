import { json } from "@sveltejs/kit"
import type { Post } from '$lib/types'
import { getPosts } from '$lib/globals'

export const prerender = true

export async function GET() {
    const posts = await getPosts()
    return json(posts as Omit<Post, 'content'>[])
}