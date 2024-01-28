<script>
  import Check from "./icons/Check.svelte";
  import Button from "./Button.svelte";
  const data = [
    {
      price: "20",
      title: "Basic",
      description:
        "Trumpa konsultacija turintiems specifinių kačių priežiūros klausimų ar įsigyjus naują kačiuką.",
      services: [
        "45 min. trukmės nuotolinė konsultacija Jums patogiu būdu",
        "Kačių šeimininko vadovas",
      ],
    },
    {
      price: "80",
      title: "Advanced",
      description:
        "Šeimininkams, kurių katės turi specifinių problemų - kraiko dėžutės vengimas, agresija, baimė",
      services: [
        "120 min. trukmės konsultacija Jūsų namuose",
        "Konsultacijos išvadų pateikimas",
        "Aplinkos modifikacijų plano pateikimas",
        "Kačių šeimininko vadovas",
      ],
    },
    {
      price: "120",
      title: "Premium",
      description:
        "Šeimininkams, kurių katės turi specifinių problemų - kraiko dėžutės vengimas, agresija, baimė bei norima didesnio palaikymo iš manęs.",
      services: [
        "120 min. trukmės konsultacija Jūsų namuose",
        "Konsultacijos išvadų pateikimas",
        "Aplinkos modifikacijų plano pateikimas",
        "Dvi 45 min. trukmės nuotolinės konsultacijos tolimesniems klausimams ir rezultatams aptarti",
        "Kačių šeimininko vadovas",
      ],
    },
  ];
</script>

{#each data as item}
<div
  class="flex flex-col p-6 mx-auto max-w-lg gap-4 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow"
>
    <h3 class="mb-4 text-2xl font-semibold">{item.title}</h3>
    <p class="font-light text-gray-500 sm:text-lg">{item.description}</p>
    <!-- <div class="flex justify-center items-baseline my-4">
      <span class="mr-2 text-3xl font-bold">{item.price} Eur.</span>
    </div> -->
    <!-- List -->
    <ul role="list" class="mb-8 space-y-4 text-left">
      {#each item.services as service}
        <li class="flex items-center space-x-3">
          <!-- Icon -->
      <Check/>
          <span>{service}</span>
        </li>
      {/each}
    </ul>
    <div class="grow"/>
   <a href="/#kontaktai">
    <Button>Kontaktai</Button>
   </a> 
</div>
{/each}
