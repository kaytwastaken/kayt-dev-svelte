<script>
    import Nav from '$lib/Nav.svelte'
    import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
    <title>&#060;Kayt.dev/&#062;</title>
</svelte:head>

<Nav></Nav>
<slot></slot>
<Footer></Footer>