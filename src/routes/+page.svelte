<script lang="ts">
  import App from '$lib/components/App.svelte'
</script>

<div>
  <App />
</div>

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(190, 201, 224);
    background: linear-gradient(180deg, rgb(171, 182, 207) 0%, rgb(229, 233, 243) 100%);
  }
</style>
