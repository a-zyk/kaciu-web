<script>
  import "../app.css";

  import { Footer } from "$lib";
</script>

<div class="flex flex-col min-h-screen">
 
  <slot />
  <div class="grow" />
  <Footer />
</div>
