<script>
  import ListDouble from '../../lib/components/ListDouble.svelte';

  import Loading from "../Loading.svelte";
  import fetchData from "../../lib/fetch";
  import Header from "../../lib/components/Header.svelte";
  export let params;
  export let pD;
  export let view;
  let url = `https://nwp-cgn.de/apis/hsp`;
  let delay = 600;
  let data1 = [];
  let data2 = [];

  const getData = async () => {
    let d = await fetchData(url, delay);
    data1 = d.data1;
    data2 = d.data2;
  };
  let promise = getData();
</script>

{#await promise}
<Loading />
{:then value}

<Header {...pD} />

<section>




<article class="flex flex-col px-2 py-1 ">
  {#if view == 2}
      <!-- Episoden Ansicht || Episoden: id, idi, ep, titel, jahr, dauer, buch, cover, extra, links, inhalt, op, name, genre, studio    -->
      {#each data2 as d}
        <ListDouble href="#/hsp/det/{d.id}" head="{d.titel}" end="{d.ep}" sub="{d.djahr} / {d.dauer}" logo="{d.cover}" />   
      {/each}
  {:else}
    <!-- SERIEN Ansicht: idi, name, genre, studio, logo, card, icon, info, op    -->
    {#each data1 as d}
      <ListDouble href="#/hsp/ser/{d.idi}" head="{d.name}" end="{d.idi}" sub="{d.genre} / {d.studio}" logo="{d.logo}" />
    {/each}
  {/if}
</article>


</section>



{:catch error}
  <h1>Error</h1>
  <pre>{JSON.stringify(error)}</pre>
{/await}
