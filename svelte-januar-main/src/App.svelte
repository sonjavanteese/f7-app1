<script>
	// import AppBar from './lib/components/AppBar.svelte';
	// import {addToast, Toasts} from './lib/toast'
	// import Router from "svelte-spa-router";
	// import {routes} from "./routes";
	// import { onMount } from 'svelte';
	// onMount(() => addToast(`App Component Mounted!`,'success', 1000))
	export let name;
</script>
<!--   
  <Toasts />
  <AppBar />
  <main>
	<Router {routes} />
  </main>
 -->  



<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	:global(main > *:not(header):not(footer)) {
	  @apply container mx-auto px-4;
	}
</style>