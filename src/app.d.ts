import { HTMLAttributes } from "svelte/elements";

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  // Esto silencia los errores de <swiper-container> y <swiper-slide>
  namespace svelteHTML {
    interface IntrinsicElements {
      "swiper-container": any;
      "swiper-slide": any;
    }
  }
}

export {};
