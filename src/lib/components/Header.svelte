<script lang="ts">
    import { fly } from 'svelte/transition';
    import { Sun, Moon } from 'phosphor-svelte';
    import { theme } from '$lib/theme.svelte';
</script>

<header 
    in:fly={{ y: -50, duration: 1000 }}
    class="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 backdrop-blur-sm"
>
    <div class="font-serif text-2xl font-bold tracking-tighter text-bakery-gold">
        ARTESANOS
    </div>

    <button
        onclick={() => theme.toggle()}
        class="group relative flex h-10 w-10 items-center justify-center rounded-full border border-bakery-gold/20 bg-bakery-flour/10 transition-all hover:border-bakery-gold"
    >
        <div class="transition-transform duration-500" style="transform: rotate({theme.dark ? '0deg' : '180deg'})">
            {#if theme.dark}
                <Sun size={20} weight="light" class="text-bakery-gold" />
            {:else}
                <Moon size={20} weight="light" class="text-bakery-wood" />
            {/if}
        </div>
    </button>
</header>