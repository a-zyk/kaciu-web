<script>
  import { Hero, About, Services, Contacts, Book } from "$lib";
</script>

<svelte:head>
  <title
    >Kačių psichologija - būdas išspręsti katės elgesio problemas.</title
  >
  <meta
    name="description"
    content="Pasitelkus kačių psichologijos principus galime geriau suprasti agresyvaus elgesio, baimės, vengimo naudotis kraiko dėžute priežastis bei jas išpręsti"
  />
  <meta charset="UTF-8" />
  <meta
    name="keywords"
    content={`kačių elgesys, katės elgesys, šlapinimasis ne kraiko dėžutėje, kačių agresija, agresyvi katė, katė drąsko baldus, katė pikta, katė save laižo`}
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="language" content="LT" />
  <meta name="url" content={`www.kaciuelgesys.lt`} />
  <meta name="identifier-URL" content="http://www.kaciuelgesys.lt" />

  <meta
    property="og:title"
    content="Kačių psichologija - ar svajojate išspręsti savo katės elgesio problemas?"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="www.kaciuelgesys.lt" />
  <meta
    property="og:description"
    content="Pasitelkus kačių psichologijos principus galime geriau suprasti agresyvaus elgesio, baimės, vengimo naudotis kraiko dėžute priežastis bei jas išpręsti"
  />
  <meta property="og:image" content="/cat_full.webp" />
  <meta property="og:locate" content="LT_lt" />
</svelte:head>

<Hero />
<Services />
<Book/>
<About />
<Contacts />
