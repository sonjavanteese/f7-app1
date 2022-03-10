<script>
  export let name = 'at'
  export let size = 24
  export let unit = 'px'
  let fontSize = `${size}${unit}`;

</script>

<svg class="icon icon-{name}" style="font-size: {fontSize};" {...$$restProps}>
  <use xlink:href="#icon-{name}" />
</svg>

<style windi:inject global>
:global(.icon) {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
