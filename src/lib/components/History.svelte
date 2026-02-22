<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = $state(false);
  let sectionRef: HTMLElement | null = $state(null);

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        visible = true;
        // Una vez visible, dejamos de observar para ahorrar recursos
        if (sectionRef) observer.unobserve(sectionRef);
      }
    }, { 
      threshold: 0.2 // Se activa cuando se ve el 20% de la sección
    });

    if (sectionRef) observer.observe(sectionRef);

    return () => observer.disconnect();
  });
</script>

<section 
  bind:this={sectionRef}
  class="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-bakery-wood text-bakery-flour"
>
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
    
    {#if visible}
      <div in:fly={{ x: -100, duration: 1000 }} class="relative">
        <div class="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-bakery-gold opacity-50"></div>
        <div class="overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80" 
            alt="Maestro Panadero" 
            class="w-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
          />
        </div>
        <div class="absolute -right-8 -bottom-8 bg-bakery-gold p-8 rounded-xl hidden md:block shadow-xl">
          <p class="font-serif text-4xl font-bold text-bakery-wood">35</p>
          <p class="text-xs uppercase tracking-tighter text-bakery-wood font-bold">Años de Tradición</p>
        </div>
      </div>

      <div in:fly={{ x: 100, duration: 1000, delay: 200 }}>
        <h2 class="font-serif text-5xl mb-8 leading-tight">
          El Secreto de <br/> <span class="text-bakery-gold italic">Nuestra Masa Madre</span>
        </h2>
        <div class="space-y-6 text-bakery-flour/80 text-lg leading-relaxed font-sans">
          <p>
            Desde 1990, en <span class="text-bakery-gold">Panadería Piero</span> no solo horneamos pan, cultivamos una tradición que se siente en cada crujido.
          </p>
          <p>
            Nuestra masa madre ha sido alimentada diariamente durante más de tres décadas, usando granos seleccionados de la región y un proceso de fermentación lenta de 48 horas.
          </p>
        </div>
        
        <button class="mt-10 px-8 py-4 bg-bakery-gold text-bakery-wood font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
          Conocer nuestra historia
        </button>
      </div>
    {/if}
  </div>

  <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bakery-gold/5 to-transparent"></div>
</section>