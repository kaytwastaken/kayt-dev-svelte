<script>
    import Nav from '$lib/Nav.svelte'
    import Footer from '$lib/Footer.svelte'

    import NProgress from 'nprogress'
    import { navigating } from '$app/stores'

    // NProgress CSS
    import '../style/nprogress.scss'

    NProgress.configure({
        minimum: 0.1,
        trickle: false
    })

    $: {
        if ($navigating) {
            NProgress.start()
        }
        if (!$navigating) {
            NProgress.done()
        }
    }
</script>

<Nav></Nav>
<slot></slot>
<Footer></Footer>