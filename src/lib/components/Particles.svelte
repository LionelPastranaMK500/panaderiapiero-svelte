<script lang="ts">
    import { onMount } from 'svelte';
    import { tsParticles } from "@tsparticles/engine";
    import { loadSlim } from "@tsparticles/slim";
    import { theme } from "$lib/theme.svelte";

    let containerId = "tsparticles";

    onMount(async () => {
        await loadSlim(tsParticles);
        await tsParticles.load({
            id: containerId,
            options: {
                fullScreen: { enable: false },
                particles: {
                    number: { value: 50, density: { enable: true, width: 800, height: 800  } },
                    color: { value: theme.dark ? "#C5A059" : "#8B5E34" },
                    shape: { type: "circle" },
                    opacity: { value: 0.2 },
                    size: { value: { min: 1, max: 3 } },
                    move: {
                        enable: true,
                        speed: 0.8,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "out" }
                    }
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "bubble" }
                    },
                    modes: {
                        bubble: { distance: 200, size: 4, duration: 2, opacity: 0.4 }
                    }
                }
            }
        });
    });
</script>

<div id={containerId} class="absolute inset-0 z-0"></div>