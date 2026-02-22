import { browser } from "$app/environment";

// Definimos el estado global usando la Rune $state
class ThemeStore {
  dark = $state(
    browser ? localStorage.getItem("bakery-theme") !== "light" : true,
  );

  toggle() {
    this.dark = !this.dark;
    if (browser) {
      localStorage.setItem("bakery-theme", this.dark ? "dark" : "light");
      this.updateDOM();
    }
  }

  updateDOM() {
    if (browser) {
      if (this.dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }
}

export const theme = new ThemeStore();
