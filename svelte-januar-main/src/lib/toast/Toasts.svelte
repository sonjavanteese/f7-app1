<script>
    import { flip } from "svelte/animate";
    import Toast from "./Toast.svelte";
    import { toasts, removeToast } from "./toastStore";
</script>

  
{#if $toasts.length}
  <section>
    {#each $toasts as toast (toast.id)}
      <article animate:flip on:click={() => {removeToast(toast.id)}}>
        <Toast {toast} />
      </article>
    {/each}
  </section>
{/if}

<style windi:inject>
section {
  position: fixed;
  top: 0;
  right: 0;
  width: 340px;
  max-width: 100%;
  z-index: 999;
  padding-top: 3.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}
</style>
