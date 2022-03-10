<script>
    import Nav from '$lib/Nav.svelte'
    import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
    <title>&#060;Kayt.dev/&#062;</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="description" content="the place for all my things" />
    <meta name="author" content="kayt_was_taken" />
    <meta name="keywords" content="Kayt, dev, kayt_was_taken"/>
</svelte:head>

<Nav></Nav>
<slot></slot>
<Footer></Footer>