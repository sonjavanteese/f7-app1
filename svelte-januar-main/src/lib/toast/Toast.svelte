<script>
    import { fade, fly } from "svelte/transition";
    import { removeToast } from "./toastStore";
    export let toast;
    // $: console.log(toast);
</script>

<div in:fly={{ y: -100 }} out:fade={{duration: 400}} class="{toast.type}" role="alert" on:click="{() => {removeToast(toast.id)}}">
  <header class="text-lg font-bold mb-1">
   {#if toast.type === 'error'}
      Error
   {:else if  toast.type === 'success'}
      Success
   {:else}
      Info
   {/if}
  </header>
    <article>
      {@html toast.msg}
    </article>
</div>

<style windi:inject>
.font-bold {
  font-weight: 700;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
div {
  border-radius: 0.75rem;
  border-left-width: 4px;
  margin-left: auto;
  margin-bottom: 1rem;
  max-width: 24rem;
  padding: 1rem;
  --tw-shadow-color: 0, 0, 0;
  --tw-shadow: 0 25px 50px -12px rgba(var(--tw-shadow-color), 0.25);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  width: 100%;
}
.info {
  --tw-bg-opacity: 1;
  background-color: rgba(253, 230, 138, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(217, 119, 6, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(217, 119, 6, var(--tw-text-opacity));
}
.success {
  --tw-bg-opacity: 1;
  background-color: rgba(191, 219, 254, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(37, 99, 235, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(37, 99, 235, var(--tw-text-opacity));
}
.error {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 202, 202, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(220, 38, 38, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(220, 38, 38, var(--tw-text-opacity));
}
.font-bold {
  font-weight: 700;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
</style>