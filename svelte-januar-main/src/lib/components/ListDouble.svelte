<script>
  export let head;
  export let end;
  export let sub;
  export let logo;
</script>


  <a {...$$restProps}>
    <figure class="w-24">
      <img src={logo} alt="img" class="w-full h-full object-cover" />
    </figure>
    <article class="flex-grow flex flex-col p-1 space-y-1">
      <div class="flex items-center">
        <span class="flex-grow text-3xl font-medium">{@html head}</span>
        <span class="font-semibold text-xl px-2 border rounded-xl">{@html end}</span>
      </div>
      <span class="text-xl font-light border border-dashed border-rose-400">
        {@html sub}
      </span>
    </article>
  </a>

<style>
  a {
    @apply flex items-center w-full space-x-1 border border-dashed border-blue-400;
  }
</style>