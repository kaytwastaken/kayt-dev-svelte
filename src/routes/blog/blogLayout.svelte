<!-- WrappedLayout.svelte -->
<script lang="ts">
	import Layout from './_blog.svelte'
    export let title
    export let date
</script>

<Layout title={title} date={date}>
	<slot />
</Layout>