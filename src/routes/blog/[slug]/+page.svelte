<script lang="ts">
    export let data:any;
</script>

<div>
    <h1>{ data.title }</h1>
    <p>published: { data.date }</p>
    <svelte:component this={data.content} />
</div>