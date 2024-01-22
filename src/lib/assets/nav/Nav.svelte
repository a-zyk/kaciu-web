<script>
  import Bars from "../icons/Bars.svelte";
  import { page } from "$app/stores";
  import data from "../data.js";
  import NavOverlay from "./NavOverlay.svelte";
  let isNavShown = false;
</script>

<div class="container py-6 mb-4 md:mb-8">
  <nav class="flex items-center justify-center">
  
      <div class="h-8 w-8 md:h-16 md:w-16 self-center">
        <img src="/flag.png" alt="logo" />
      </div>
 
    <div class="flex-grow" />
    <div class="flex md:hidden">
      <Bars on:click={() => (isNavShown = true)} />
      {#if isNavShown}
        <NavOverlay {data} on:close={() => (isNavShown = false)} />
      {/if}
    </div>

    <ul class="hidden md:flex gap-10 lg:gap-24 justify-center items-center">
      {#each data as item}
        <li>
          <a class:active={$page.url.pathname === item.link} href={item.link}>
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .active {
    font-weight: 600;
  }
</style>
