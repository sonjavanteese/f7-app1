<script>
  import {addToast} from '../lib/toast';
  import Header from "../lib/components/Header.svelte";
 export let pD;


let wizard = {
	summon () {
		console.log('From out of thin air, watch me make a bear');
	},

	vanish () {
		console.log(`Now you see me, now you don't.`);
	}

};

wizard.summon();
wizard.vanish();



</script>


<Header {...pD} />
<section>

<h2>Home component</h2>
<div class="flex items-center py-4 space-x-4">
  <button class="btn btn-blue" on:click={() => addToast('Some Message from first Btn', 'error', 8000)}>Toggle Error</button>
  <button class="btn" on:click={() => addToast('Some Info from second Btn', 'info', 90000)}>Toggle Info</button>
</div>
<p>
  Bundlers like Rollup and Webpack support automatic code splitting when you use
  dynamic imports, so after compiling this sample, in the <code>dist/</code> folder
  you'll see a bunch of different JavaScript files. At runtime, the browser requests
  them only when you first navigate to the route (and then they're cached).
</p>



<!-- <IconLibDoc /> -->
</section>