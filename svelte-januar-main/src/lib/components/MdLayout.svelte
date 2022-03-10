<script>
  export let author;
  export let date;
  export let title;
</script>

{#if title}
  <section>
    <h4>{title}</h4>
  </section>
  <hr />
{/if}

<section>
  <slot><!-- optional fallback --></slot>
</section>

<style>
  section {
    @apply p-4;
  }
</style>
