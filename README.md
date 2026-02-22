🥖 Panadería Piero - Svelte Edition (Legacy Migration)

¡Bienvenida al equipo! Si estás leyendo esto, es porque hemos dejado atrás la arquitectura pesada de React para mudarnos a SvelteKit 5.

No te equivoques: Svelte no es solo "otro framework". Es un compilador. Aquí no "renderizamos" componentes sobre la marcha usando un Virtual DOM costoso; aquí generamos código optimizado que corre directamente sobre el metal del navegador. El rendimiento es nuestra moneda de cambio y el código limpio es nuestra ley.

El gerente es exigente y los tiempos en producción son cortos. Este repositorio es tu base de operaciones. Tu trabajo no es solo mantenerlo, es dominarlo y romperlo para entender cómo funciona.

🛠️ Comandos de Supervivencia

Abre tu terminal y tatúate estos comandos:

npm install --legacy-peer-deps: Instala las dependencias. Usamos el flag --legacy porque algunas librerías de partículas son caprichosas con las versiones de Svelte 5.

npm run dev: Inicia el servidor de desarrollo. Verás los cambios instantáneamente. Es tu mejor amigo.

npm run build: Genera el paquete de producción. Si esto falla, tu código no sirve. Es la prueba de fuego.

npm run preview: Ejecuta localmente lo que acabas de compilar para producción. Úsalo antes de avisar que "ya terminaste".

🏗️ Estructura del Proyecto (Dónde meter mano)

El proyecto está organizado para que cada pieza tenga una responsabilidad única:

src/routes/+layout.svelte: El "esqueleto" global. Aquí vive el Smooth Scroll (Lenis), las fuentes y el modo oscuro. Si rompes esto, apagas la luz de toda la web.

src/routes/+page.svelte: El director de orquesta. Aquí es donde importas y posicionas las secciones de la landing.

src/lib/components/: Tu caja de herramientas. Aquí están el Header, ProductCarousel, History, etc. Cada archivo .svelte es independiente.

src/lib/theme.svelte.ts: El sistema nervioso central del modo oscuro. Usa Svelte Runes ($state) para que el cambio de tema sea instantáneo.

static/: El almacén de activos. Imágenes, iconos y archivos estáticos. Si ves un error 404 en la consola, lo más probable es que hayas olvidado poner el archivo aquí.

🚩 EL RETO: "La Metamorfosis de Marca"

Tu primera misión real es demostrar que puedes adaptar este motor de alta precisión a cualquier cliente en tiempo récord. El gerente quiere ver si eres capaz de transformar esta panadería en una "Caffetteria Italiana Premium" o una "Vinoteca Boutique".

📋 Requerimientos del Reto:

Rebranding Visual (Tailwind):

Entra a tailwind.config.js y redefine los colores de la marca bakery. Necesito una paleta de colores sofisticada (ejemplo: Negros profundos #0a0a0a, dorados champaña #d4af37 o verdes oliva mate).

Asegúrate de que el contraste sea perfecto tanto en modo claro como oscuro.

Nueva Sección de "Reservas" (Componentización):

Crea un nuevo archivo src/lib/components/Booking.svelte.

Diseña un formulario de contacto elegante. Debe usar HTML5 para validaciones (campos requeridos, tipos de email, etc.).

Interactividad JS: Al enviar el formulario, debes usar la librería svelte-sonner para mostrar una notificación flotante que diga: "Enviando solicitud al sommelier/barista...".

El Puente PHP (Simulación de Backend):

Crea un archivo llamado process.php dentro de la carpeta static/.

Dentro, escribe un script simple en PHP que reciba un POST con el nombre y la fecha de reserva, y que simule guardar los datos (puedes usar un error_log o simplemente retornar un JSON).

Punto Extra: Intenta hacer un fetch() desde tu componente de Svelte hacia ese archivo .php. Aunque SvelteKit no ejecuta PHP nativamente, el gerente quiere ver que sabes estructurar la petición hacia un servidor externo.

Curaduría de Contenido:

Cambia los textos y las imágenes del carrusel por productos de tu nueva temática. Nada de panes: ahora vendemos experiencias (Cafés de especialidad, Vinos de reserva, etc.).

💡 Tips de Oro para Svelte 5

Runas: Olvídate de let reactivo simple. Ahora usamos $state() para variables, $derived() para cálculos automáticos y $effect() para efectos secundarios.

Snippets: Si ves un {@render ...}, es un snippet de Svelte. Úsalos para reutilizar fragmentos de HTML dentro del mismo componente sin crear archivos nuevos.

Estilos: Si una clase CSS no parece aplicarse, recuerda que los estilos en Svelte son locales. Usa :global(.tu-clase) si necesitas afectar a elementos fuera del componente.

Nota del mentor: "En este nivel, Si el código compila, vas a mitad de camino. Si el usuario siente que la página vuela, entonces has terminado tu trabajo."
