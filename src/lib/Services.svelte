<script>
  import { Card } from "$lib";

  const services = ["Gamtinių reikalų atlikimas įvairiose vietose tik ne kraiko dėžėje",
  "Padažnėjęs ir  intensyvus daiktų draskymas",
  "Smarkus vokalizavimas (miaukimas)",
  "Naktinis neramumas",
  "Specifinė katės agresija",
  "Palengvinti naujo gyvūno atsiradimą namuose",
  "Katės agresiją žmogui"
  ]
</script>

<div
  id="paslaugos"
  class="pt-16 pb-8 md:pt-24 md:pb-12 container flex flex-col items-center"
>
  <div class="flex flex-col items-center mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    <h2 class="mb-4 text-4xl tracking-tight font-abold text-gray-900">
      Pažink savo katę
    </h2>
   <div class="my-4"> Kačių bihevioristas - psichologas gali padėti išspręsti šias problemas:</div>
    <ul class="list-disc text-left mb-5 font-light text-gray-500 sm:text-xl">
      
       {#each services as service }
       <li>
        {service}
       </li>
        
       {/each}
  
    </ul>
  </div>
  <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
    <Card />
  </div>
</div>
