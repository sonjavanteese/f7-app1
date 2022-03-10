<script>
  export let params;
</script>

<header class="fixed inset-0 flex items-center justify-center z-40 text-light-500 bg-dark-500 bg-opacity-80">
  <div class="text-center">
    <h2>Loading…</h2>

    {#if params && params.message}
      <p>Here's your message: {params.message}</p>
    {/if}
  </div>
</header>
