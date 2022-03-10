<script>
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
    return d;
  };

  let promise = getData();
</script>

{#await promise}
<Loading />
{:then value}

<Header {...pD} />
  <section>
    <div>
      {#if view == 2}
      <ul>
        {#each data2 as d}
          <li>
            {d.name} - {d.titel}
          </li>
        {/each}
      </ul>
      {:else}
      <ul>
        {#each data1 as d}
          <li>
            {d.name} - {d.genre}
          </li>
        {/each}
      </ul>
      {/if}
     
    </div>
  </section>


{:catch error}
  <h1>Error</h1>
  <pre>{JSON.stringify(error)}</pre>
{/await}
