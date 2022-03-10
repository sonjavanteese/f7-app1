<script>
  import Loading from "../Loading.svelte";
  import fetchData from "../../lib/fetch";
  import Header from "../../lib/components/Header.svelte";
  let url = `https://nwp-cgn.de/apis/hsp`;
  let data1 = [];
  let data2 = [];
  export let pD;
  export let params = {};
  let promise = fetchData(url).then((data) => {
    data1 = data.data1;
    data2 = data.data2;
    return data1;
  });
</script>

{#await promise}
  <Loading />
{:then value}
<Header {...pD} />
<section>
  <h2>Hoerspiel Episoden</h2>
  <div>
    <ul>
      {#each data2 as { id, idi, ep, titel, jahr, dauer, buch, cover, extra, links, inhalt, op, name, genre, studio }}
        <li>
          {name} - {titel}
        </li>
      {/each}
    </ul>
  </div>
</section>

{:catch error}
  <h1>Error</h1>
{/await}
