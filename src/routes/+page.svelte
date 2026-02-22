<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Particles from '$lib/components/Particles.svelte';
    import History from '$lib/components/History.svelte';
    import Categories from '$lib/components/Categories.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import ProductCarousel from '$lib/components/ProductCarousel.svelte'; // <-- AÑADE ESTO
    import { fly } from 'svelte/transition';
</script>

<Header />

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
    <Particles />

    <div class="container relative z-10 mx-auto flex flex-col items-center lg:flex-row lg:gap-12">
        <div class="text-center lg:text-left lg:w-1/2">
            <h2 in:fly={{ x: -50, duration: 1000, delay: 200 }} 
                class="mb-2 font-sans text-sm font-bold tracking-[0.3em] text-bakery-gold uppercase">
                Desde 1990
            </h2>
            <h1 in:fly={{ x: -50, duration: 1000, delay: 400 }}
                class="font-serif text-6xl md:text-8xl font-bold leading-tight text-bakery-wood dark:text-bakery-flour">
                Artesanos del <br />
                <span class="text-bakery-gold">Sabor Tradicional</span>
            </h1>
            <p in:fly={{ x: -50, duration: 1000, delay: 600 }}
               class="mt-6 max-w-lg text-lg text-bakery-wood/70 dark:text-bakery-flour/70">
                Pan horneado a la leña con ingredientes orgánicos y el secreto de tres generaciones de maestros panaderos.
            </p>
        </div>

        <div in:fly={{ x: 50, duration: 1200 }} 
             class="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div class="group relative h-96 w-72 perspective-1000">
                <div class="relative h-full w-full rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-500 hover:rotate-y-12 hover:scale-105 dark:bg-black/20">
                    <div class="absolute -top-10 -right-10 h-40 w-40 bg-bakery-gold/20 blur-3xl rounded-full"></div>
                    <img src="/pan-hero.webp" alt="Pan Artesanal" class="h-full w-full object-contain drop-shadow-2xl" />
                    <div class="absolute bottom-6 left-6 text-bakery-flour">
                        <span class="block text-xs uppercase tracking-widest opacity-70">Especialidad</span>
                        <span class="font-serif text-2xl font-bold">Ciabatta de Masa Madre</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<ProductCarousel /> 
<History />
<Categories />
<Footer />


<style>
    .perspective-1000 {
        perspective: 1000px;
    }
    :global(.rotate-y-12) {
        transform: rotateY(12deg);
    }
</style>