<script>
  import data from "../data.js";
</script>

<footer class="container py-6">
  <div class="w-full flex flex-col mx-auto p-4 md:py-8">
    <div class="flex items-center justify-center gap-8">
      <ul
        class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0"
      >
        {#each data as item}
          <li>
            <a class="me-4 md:me-6" href={item.link}>
              {item.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span class=" text-sm text-gray-500 self-center"
      >© 2024 Kačių psichologija. Visos teisės saugomos.</span
    >
  </div>
</footer>
