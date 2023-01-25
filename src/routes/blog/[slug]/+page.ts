// TODO its your friend type errors
// @ts-ignore
export async function load({ params }){
    const post = await import(`../../../posts/${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      date,
    }
  }