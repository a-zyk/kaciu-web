<script>
  import Card from "./assets/Card.svelte";
</script>

<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
  <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    <h2
      class="mb-4 text-4xl tracking-tight font-abold text-gray-900 "
    >
      Pažink savo katę
    </h2>
    <p class="mb-5 font-light text-gray-500 sm:text-xl ">
        Nuo auginimo klausimų iki elgesio analizės. Galite rinktis jums tinkamą variantą.
    </p>
  </div>
  <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    <Card />
  </div>
</div>
