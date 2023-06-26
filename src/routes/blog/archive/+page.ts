import type { Post } from '$lib/types'

// { fetch } is very important here bc its telling svelte hey use 'superpowered fetch'
// can resolve RELATIVE URLS
// https://youtu.be/RhScu3uqGd0?t=2400
export async function load({ fetch }) {


    const res = await fetch('/api/posts/archive')
    const posts: Post[] = await res.json()
    return { posts }

}
