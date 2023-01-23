<!-- WrappedLayout.svelte -->
<script lang="ts">
	import Layout from '../_blog.svelte'
    export let title
    export let date
    export let excerpt
</script>

<Layout title={title} date={date} excerpt={excerpt}>
	<slot />
</Layout>