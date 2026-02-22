<script lang="ts">
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';
  import { CaretLeft, CaretRight } from 'phosphor-svelte';

  // Usamos tus productos del repositorio
  const products = [
    { id: 1, name: 'Pan de Masa Madre', price: 12.5, image: 'https://picsum.photos/400/300', category: 'Salados' },
    { id: 2, name: 'Baguette Tradicional', price: 3.0, image: 'https://picsum.photos/400/301', category: 'Salados' },
    { id: 3, name: 'Croissant Especial', price: 4.5, image: 'https://picsum.photos/400/302', category: 'Dulces' }
  ];

  let swiperEl: any = $state();

  onMount(() => {
    register();
    
    const params = {
      slidesPerView: 1.2,
      spaceBetween: 20,
      breakpoints: {
        1024: { slidesPerView: 3 }
      }
    };

    if (swiperEl) {
      Object.assign(swiperEl, params);
      swiperEl.initialize();
    }
  });

  // Funciones para los botones que usan las importaciones
  const next = () => swiperEl?.swiper.slideNext();
  const prev = () => swiperEl?.swiper.slidePrev();
</script>

<section class="py-20 px-8">
  <div class="mb-10 flex items-center justify-between">
    <h2 class="font-serif text-4xl dark:text-bakery-flour text-bakery-wood">Nuestras Creaciones</h2>
    
    <div class="flex gap-2">
      <button onclick={prev} class="p-2 border border-bakery-gold text-bakery-gold rounded-full hover:bg-bakery-gold hover:text-white transition-colors">
        <CaretLeft size={24} />
      </button>
      <button onclick={next} class="p-2 border border-bakery-gold text-bakery-gold rounded-full hover:bg-bakery-gold hover:text-white transition-colors">
        <CaretRight size={24} />
      </button>
    </div>
  </div>

  <div class="w-full min-h-[400px]">
    <swiper-container bind:this={swiperEl} init="false" class="w-full h-full">
      {#each products as product}
        <swiper-slide>
          <div class="bg-bakery-wood/5 dark:bg-white/5 p-6 rounded-2xl border border-bakery-gold/10 backdrop-blur-sm">
            <img src={product.image} alt={product.name} class="w-full h-56 object-cover rounded-xl mb-4 shadow-lg" />
            <span class="text-xs uppercase tracking-widest text-bakery-gold">{product.category}</span>
            <h3 class="font-serif text-2xl font-bold mt-1">{product.name}</h3>
            <p class="text-xl font-bold mt-2 text-bakery-gold">S/ {product.price.toFixed(2)}</p>
          </div>
        </swiper-slide>
      {/each}
    </swiper-container>
  </div>
</section>