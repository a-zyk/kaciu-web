<script>
    import Button from "./assets/Button.svelte";
    import Nav from "./assets/nav/Nav.svelte";
</script>
<div id="hero" class="relative flex flex-col   text-white font-medium h-full overflow-x-hidden">

    <Nav />
    <div class="flex flex-col justify-center gap-10 container py-8 md:py-20 lg:py-44">
        <div class="flex flex-col gap-10 z-20 max-w-[600px]">
    
            <h1 class="text-4xl drop-shadow-[1px_2px_var(--tw-shadow-color)] shadow-gray-600 ">Ar svajojate geriau suprasti savo katę?</h1>
            <h3 class="text-2xl font-normal drop-shadow-[1px_2px_var(--tw-shadow-color)] shadow-gray-600 ">
              Pasitelkus kačių psichologijos principus galime geriau suprasti agresyvaus
              elgesio, baimės, vengimo naudotis kraiko dėžute priežastis bei jas išpręsti
            </h3>
            <a href="/#paslaugos">

                <Button classes="md:w-[200px]">Paslaugos</Button>
            </a>
        </div>
    </div>
    <div class="absolute bottom-0 right-0 z-0 opacity-50  h-full w-full">

        <img class="w-full h-full object-cover" src="/cat_full.webp" alt="kates portretas"/>
    </div>
    <div class="absolute h-full w-full bg-gradient-to-r from-gray-600 to-transparent"></div>
</div>
