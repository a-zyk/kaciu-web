<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let data;
</script>

<div
  transition:fade
  class="container py-6 mb-4 md:mb-8 fixed top-0 left-0 z-50 duration-100 bg-white h-full w-full flex flex-col items-end"
>
  <button class="cursor-pointer" on:click={() => dispatch("close")}>X</button>
  <ul class="flex flex-col items-end py-16 leading-[86px] text-xl font-light">
    {#each data as item}
      <li>
        <a on:click={() => dispatch("close")} href={item.link}>{item.title}</a>
      </li>
    {/each}
  </ul>
</div>
