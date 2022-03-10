<script>
  export let header;
  export let sub;
  export let slider;
  let img;
  if (slider.length >= 1) {
    img = slider[0].file;
  }
</script>

<header style="background-image: url({img ? img : ''});">
  <div>
    <h1>
        {header}
    </h1>
    <h4>
        {sub} 
    </h4>
  </div>
</header>

<style>
  header {
    @apply py-18 sm:py-24 md:py-32 text-center bg-no-repeat bg-cover;
  }
  header {
    @apply bg-black bg-opacity-90 text-white;
  }
</style>
