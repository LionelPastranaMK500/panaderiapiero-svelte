<script lang="ts">
  import { InstagramLogo, FacebookLogo, WhatsappLogo, MapPin } from 'phosphor-svelte';
</script>

<footer class="bg-bakery-wood text-bakery-flour py-16 border-t border-bakery-gold/20">
  <div class="container mx-auto px-8 grid md:grid-cols-4 gap-12">
    <div class="col-span-1 md:col-span-2">
      <h2 class="font-serif text-3xl text-bakery-gold mb-4">ARTESANOS</h2>
      <p class="max-w-sm text-bakery-flour/60 leading-relaxed">
        Preservando el arte de la panadería tradicional desde 1990. Cada pan cuenta una historia de paciencia y pasión.
      </p>
    </div>
    
    <div>
      <h4 class="font-bold mb-4 text-bakery-gold uppercase tracking-widest text-sm">Visítanos</h4>
      <div class="flex items-start gap-2 text-bakery-flour/60">
        <MapPin size={20} class="text-bakery-gold shrink-0" />
        <p>Calle de las Harinas 123,<br/>Valle Sagrado, Perú</p>
      </div>
    </div>

    <div>
      <h4 class="font-bold mb-4 text-bakery-gold uppercase tracking-widest text-sm">Síguenos</h4>
      <div class="flex gap-4">
        <a href="#" class="hover:text-bakery-gold transition-colors"><InstagramLogo size={28} /></a>
        <a href="#" class="hover:text-bakery-gold transition-colors"><FacebookLogo size={28} /></a>
        <a href="#" class="hover:text-bakery-gold transition-colors"><WhatsappLogo size={28} /></a>
      </div>
    </div>
  </div>
  
  <div class="container mx-auto px-8 mt-16 pt-8 border-t border-white/5 text-center text-xs text-bakery-flour/40">
    <p>© 2026 Panadería Piero. Hecho con Masa Madre y SvelteKit.</p>
  </div>
</footer>