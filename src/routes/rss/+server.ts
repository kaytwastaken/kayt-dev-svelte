import type { Post } from '$lib/types'

export async function GET({ fetch }) {
	const response = await fetch('api/posts')
	let posts: Post[] = await response.json()
	posts = posts.slice(0, 10)

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>kayt.dev</title>
				<description>kayt's blog and links</description>
				<link>https://kayt.dev</link>
				<atom:link href="https://kayt.dev/rss" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.default}</description>
							<link>https://kayt.dev/blog/${post.slug}</link>
							<guid isPermaLink="true">https://kayt.dev/blog/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
