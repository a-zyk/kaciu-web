<script>
  import Check from "./icons/Check.svelte";
  import Button from "./Button.svelte";
  const data = [
    {
      price: "50",
      title: "Konsultacija nuotoliu",
      description:
        "Pirminė konsultacija apie katės elgesį ir problemas. Nuotolinės konsultacijos metu galime nuspręsti ar reikalingas atvykimas į namus.",
      services: [
        "1.5 - 2 val. konsultacija dėl katės elgesio",
        "Katės šeimininko atsiųstos medžiagos analizė ir aptarimas",
        "Po terapinio/modifikacinio plano pateikimo, su katės šeimininku nuolat palaikoma komunikacija dėl jo įgyvendinimo.",
      ],
    },
    {
      price: "70",
      title: "Konsultacija atvykus į namus",
      description:
        "Konsultacijos namuose metu galime geriau įvertinti katės aplinką, identifikuoti stresorius ir natūralų elgesį.",
      services: [
        "1.5 - 2 val. konsultacija dėl katės elgesio",
        "Katės šeimininko atsiųstos medžiagos analizė ir aptarimas",
        "Gyvūno aplinkos vertinimas",
        "Terapinio ir/arba modifikacinio plano parengimas(vaizdinė medžiaga)",
        "Po terapinio/modifikacinio plano pateikimo, su katės šeimininku nuolat palaikoma komunikacija dėl jo įgyvendinimo.",
    
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
   <!-- <div class="font-light text-gray-500 text-sm">Tos pačios katės antra (pagal poreikį) nuotolinė konsultacija = 30eur/val.</div> -->
</div>
{/each}
