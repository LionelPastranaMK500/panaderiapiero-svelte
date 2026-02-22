<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { theme } from '../lib/theme.svelte';
    import { Toaster } from 'svelte-sonner';

    let { children } = $props();
    let mounted = $state(false);

    onMount(() => {
        let lenis: any;

        const init = async () => {
            theme.updateDOM();
            
            // Importación dinámica para evitar líos de SSR
            const LenisModule = await import('lenis');
            const Lenis = LenisModule.default;
            
            lenis = new Lenis({
                autoRaf: true,
            });

            mounted = true;
        };

        init();

        // El retorno debe ser síncrono para que TS no llore
        return () => {
            if (lenis) lenis.destroy();
        };
    });
</script>

<div class="relative min-h-screen transition-colors duration-500 bg-bakery-flour text-bakery-wood dark:bg-bakery-wood dark:text-bakery-flour">
    <div class="bg-noise"></div>
    <Toaster richColors position="bottom-right" />
    
    {#if mounted}
        {@render children()}
    {:else}
        <div class="flex h-screen w-full items-center justify-center font-serif text-bakery-gold">
            <span class="animate-pulse">Cargando Artesanía...</span>
        </div>
    {/if}
</div>