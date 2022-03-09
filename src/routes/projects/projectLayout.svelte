<script lang="ts">
	import Layout from './_project.svelte'
    export let title
    export let status
</script>

<Layout title={title} status={status}>
	<slot />
</Layout>