<script>
  import Bars from "../icons/Bars.svelte";
  import { page } from "$app/stores";
  import data from "../data.js";
  import NavOverlay from "./NavOverlay.svelte";
  let isNavShown = false;
</script>

<div  class="z-30">
  <div class="container py-3  md:pb-6">
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

      <ul class="hidden md:flex gap-10 lg:gap-24 font-medium justify-center items-center text-white z-20">
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
</div>

<style>
  .active {
    font-weight: 700;
    border-bottom: 3px solid white;
    padding-bottom: 5px;
  }
</style>
