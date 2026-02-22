<script lang="ts">
  const categories = [
    { name: 'Panadería', desc: 'Horneado diario a la leña', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=500' },
    { name: 'Pastelería', desc: 'Dulzura en cada bocado', img: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=500' },
    { name: 'Cafetería', desc: 'El grano perfecto', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500' }
  ];
</script>

<section class="py-24 px-8 bg-bakery-flour dark:bg-bakery-wood-dark transition-colors">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-3 gap-8">
      {#each categories as cat}
        <div class="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer">
          <img src={cat.img} alt={cat.name} class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-bakery-wood via-transparent to-transparent opacity-80"></div>
          <div class="absolute bottom-8 left-8">
            <h3 class="font-serif text-3xl text-bakery-gold">{cat.name}</h3>
            <p class="text-bakery-flour/80 mt-2">{cat.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>