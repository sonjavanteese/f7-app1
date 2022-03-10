<script>
  import { page } from "$app/stores";
  import { pages } from "../db";
  import { Icon } from "../icons";
  let size = 28;
  $: currentPage = $page.url.pathname;
</script>

<footer>
  <nav>
    {#each pages as { name, path, icon }, i}
      {#if path === "/"}
        <a
          class="tab-item {currentPage === '/' ? 'bg-gray-300' : ''}"
          href={path}
          title={name}
        >
          <Icon {size} name={icon} />
        </a>
      {:else}
        <a
          class="tab-item {currentPage.includes(path) ? 'bg-gray-300' : ''}"
          href={path}
          title={name}
        >
          <Icon {size} name={icon} />
        </a>
      {/if}
    {/each}
  </nav>
</footer>

<style>
  footer {
    @apply shadow-lg;
  }
  nav {
    @apply flex items-center justify-center bg-gray-200 divide-x divide-gray-400;
  }
  a {
    @apply w-full flex items-center justify-center px-2 py-2 text-center h-12 hover:bg-gray-300 border-t-2 border-gray-400;
  }
</style>
