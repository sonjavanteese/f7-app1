<script>
  import { link, location, pop } from "svelte-spa-router";
  import active from 'svelte-spa-router/active';
  import { isOpen } from "../stores";
  const navi = [{"name":"Start","path":"/","icon":"home"},{"name":"Serien","path":"/hsp/ser","icon":"hsp"},{"name":"Episoden","path":"/hsp/eps","icon":"hsp"},{"name":"User","path":"/user","icon":"user"}];
</script>

<nav class="divide-x">
  {#each navi as { path, name, icon }, i}
  <a href={path} use:link class={$location === path ? 'font-semibold italic' : 'font-thin'}>{name}</a>
  {/each}
</nav>


<style>
  nav {
    @apply flex items-center; 
  }
  a {
    @apply flex w-full items-center justify-center text-center text-bases h-12 p-2 border-b hover:bg-gray-50;
  }

</style>
