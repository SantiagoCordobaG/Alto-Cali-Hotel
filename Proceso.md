# Proceso de Cambios

Este archivo es una bitácora de cambios de la página con explicación práctica para repetirlos después en otros proyectos.

---

## 2026-05-22 - Agregar ubicación real en `LocationSection`

### Pedido
Reemplazar el mapa visual de ejemplo de la sección de ubicación por un mapa real de Google Maps usando el `iframe` proporcionado.

### Archivos tocados
- `sections/LocationSection.tsx`
- `data/site.ts`

### Qué cambié
1. En `sections/LocationSection.tsx` reemplacé el bloque decorativo del mapa por un `<iframe>` real de Google Maps.
2. Dejé el `iframe` ocupando todo el contenedor con clases:
   - `absolute inset-0`
   - `h-full w-full`
3. Mantuvé el estilo visual del diseño usando el mismo contenedor con:
   - borde
   - `rounded-[2.5rem]`
   - `overflow-hidden`
   - `shadow-premium`
4. Actualicé el texto lateral para que ya no diga "Cali, Colombia", sino la dirección real.
5. En `data/site.ts` actualicé `siteConfig.address` con:
   - `Cl 73 # 3-76, Jorge Eliecer Gaitan, Cali, Valle del Cauca`

### Cómo se hace

#### 1. Localiza la sección correcta
Primero hay que encontrar el componente que renderiza la zona que quieres cambiar. Aquí el nombre real no era `LocalSection`, sino `LocationSection`.

Una forma rápida de ubicarlo:

```bash
rg -n "LocationSection|ubicacion|iframe" app components sections data
```

#### 2. Reemplaza el placeholder por el `iframe`
Cuando una sección tiene un mapa falso o una imagen decorativa, lo normal es sustituir ese bloque por un `iframe` dentro del mismo contenedor visual.

Base reutilizable:

```tsx
<div className="relative overflow-hidden rounded-[2rem]">
  <iframe
    title="Ubicación"
    src="URL_DEL_EMBED"
    className="absolute inset-0 h-full w-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

#### 3. Hazlo responsive sin depender del `width` y `height` del embed
Google Maps suele dar un `iframe` con `width="600"` y `height="450"`, pero en React/Tailwind conviene controlar eso con CSS del contenedor, no con esos atributos.

Por eso aquí se usó:
- un contenedor con `min-h-[520px]`
- el `iframe` con `absolute inset-0 h-full w-full`

Así el mapa se adapta al layout del sitio.

#### 4. Mantén la estética del proyecto
No hace falta perder el diseño por meter un embed. Lo bueno es conservar:
- el `border`
- el `shadow`
- el `border-radius`
- una pequeña etiqueta visual si aporta contexto

En una primera versión dejé una cápsula superior con el texto `Ubicación real en Google Maps`, pero después se retiró porque tapaba controles del embed. La lección útil es que los overlays sobre mapas interactivos deben usarse con mucho cuidado.

#### 5. Si la dirección aparece en más lugares, centralízala
En este proyecto la dirección no solo vive en la sección de ubicación. También puede aparecer en footer, contacto u otras zonas.

Por eso conviene guardarla en `data/site.ts`:

```ts
address: "Cl 73 # 3-76, Jorge Eliecer Gaitan, Cali, Valle del Cauca"
```

Esto es mejor que repetir el texto en varios componentes porque:
- evita inconsistencias
- facilita cambios futuros
- hace que el contenido global viva en un solo sitio

### Patrón para otros proyectos
Si luego quieres hacer esto en otro proyecto, la idea general es:

1. Encontrar el componente que dibuja la sección.
2. Identificar si el mapa actual es decorativo o real.
3. Reemplazar el bloque visual por un `iframe` de Google Maps.
4. Controlar tamaño y responsividad desde CSS o clases utility.
5. Guardar la dirección en una config global si se reutiliza.

### Nota práctica
Si después de cambiar el archivo el navegador sigue mostrando la versión vieja:

1. reinicia `npm run dev`
2. recarga la página
3. si hace falta, usa recarga dura del navegador

---

## 2026-05-22 - Ajuste del mapa: quitar overlay que tapaba controles

### Pedido
Volver a poner el `iframe` de Google Maps, pero sin el texto flotante de arriba porque tapaba botones del propio mapa.

### Archivo tocado
- `sections/LocationSection.tsx`

### Qué cambié
1. Reinstalé el `iframe` de Google Maps en el contenedor derecho.
2. Quité la cápsula visual que decía `Ubicación real en Google Maps`.
3. Eliminé también el import de `Navigation`, porque al quitar esa cápsula ya no hacía falta.

### Por qué pasó
Cuando pones una capa flotante (`absolute`) encima de un `iframe`, aunque visualmente se vea bien, esa capa puede interceptar clics o cubrir controles nativos del embed.

En Google Maps eso afecta cosas como:
- botones de zoom
- arrastre del mapa
- accesos de navegación
- controles propios del widget

### Cómo evitarlo en otros proyectos
Si el embed necesita interacción real, lo más seguro es:

1. no poner overlays por encima
2. o colocarlos fuera de la zona clicable
3. o usar `pointer-events-none` solo si estás completamente seguro de que no tapará elementos importantes visualmente

### Regla práctica
Si el contenido incrustado es interactivo, primero prioriza usabilidad y después decoración.

En mapas, videos con controles o widgets externos, cualquier capa encima debe evaluarse con cuidado.

---

## 2026-05-22 - Alinear cards de habitaciones y convertir experiencias en strip horizontal

### Pedido
1. Mantener alineado el contenido interno de las cards de habitaciones aunque una tenga el título más largo que otra.
2. Cambiar la sección `Experiencias` para que deje de verse como cards separadas y pase a una franja horizontal continua:
   - primer bloque de texto
   - luego imágenes una al lado de otra
   - full width
   - en mobile con scroll horizontal

### Archivos revisados y tomados como base
- `sections/RoomsSection.tsx`
- `sections/ExperiencesSection.tsx`

Tomé esos archivos tal como estaban modificados en ese momento y a partir de esa versión hice los ajustes nuevos.

### Archivos tocados
- `sections/RoomsSection.tsx`
- `sections/ExperiencesSection.tsx`

### 1. Cómo alineé las cards de habitaciones

#### Qué cambié
En `RoomsSection` convertí cada card en una columna flexible:

```tsx
className="group flex h-full flex-col ..."
```

Y dentro del cuerpo hice esto:

```tsx
<div className="flex flex-1 flex-col p-6">
  <div className="flex flex-1 flex-col">
    <h3 className="min-h-[3.5rem] ...">{room.title}</h3>
    <p className="mt-3 flex-1 ...">{room.description}</p>
  </div>
  <div className="mt-5 flex flex-wrap gap-2">...</div>
  <Link className="mt-6 ...">Ver detalles</Link>
</div>
```

#### Por qué funciona
El problema no era solo el título largo: era que cada card estaba creciendo de forma distinta según su contenido.

La solución fue combinar tres ideas:

1. `flex h-full flex-col` en la card completa:
   - hace que toda la tarjeta se comporte como una columna de altura completa

2. `min-h-[3.5rem]` en el título:
   - reserva un alto mínimo para el bloque del heading
   - si un título ocupa dos líneas, no descuadra a las demás

3. `flex-1` en la descripción:
   - hace que la descripción tome el espacio flexible
   - empuja amenities y CTA hacia una zona consistente en todas las cards

#### Patrón para otros proyectos
Si tienes tarjetas que deben verse alineadas aunque cambien título, texto o metadata, este patrón suele funcionar bien:

1. contenedor principal con `flex flex-col h-full`
2. cuerpo con `flex-1`
3. altura mínima en el título o en el bloque variable
4. CTA al final de la columna

Es mucho más estable que intentar alinear solo con márgenes.

---

### 2. Cómo convertí `ExperiencesSection` en una franja horizontal continua

#### Qué cambié
Quité la estructura anterior de:
- encabezado arriba
- párrafo al lado
- cards separadas abajo

Y la sustituí por un solo strip full-width.

La nueva lógica es:
1. primer bloque = contenido textual
2. siguientes bloques = imágenes
3. todos dentro del mismo contenedor continuo

#### Estructura aplicada
El contenedor general ahora sale del ancho del `premium-container` y se estira al ancho completo de la ventana:

```tsx
<div className="relative left-1/2 w-screen -translate-x-1/2">
```

Esto sirve cuando el sitio usa contenedores centrados pero tú quieres que una sección específica sea full-bleed.

Después, el strip tiene:

```tsx
<div className="overflow-x-auto ... md:overflow-hidden">
  <div className="flex min-w-max ... md:grid md:grid-cols-[minmax(320px,30vw)_repeat(4,minmax(0,1fr))]">
```

#### Cómo responde por dispositivo

##### En mobile
- se usa `flex`
- el contenido se pone en fila horizontal
- el usuario puede deslizar con `overflow-x-auto`
- el bloque de texto aparece primero
- luego vienen las imágenes

##### En desktop
- cambia a `grid`
- la primera columna usa aproximadamente `30vw`
- las otras columnas reparten el resto
- todo comparte la misma altura

#### Cómo conseguí el efecto de strip continuo
En vez de usar cards sueltas con `gap`, usé bloques pegados con borde lateral:

```tsx
border-r border-white/10 last:border-r-0
```

Esto hace que visualmente se lea como una sola franja continua y no como tarjetas independientes.

#### Cómo igualé la altura entre texto e imágenes
El truco fue darle altura al contenedor principal en desktop:

```tsx
md:h-[520px]
```

Y luego:
- el bloque de texto ocupa esa altura
- cada imagen usa `h-full`
- la imagen usa `object-cover`

Así todas las piezas quedan alineadas aunque el contenido interno sea diferente.

#### Texto usado en el bloque inicial
En el primer bloque dejé:
- kicker `Experiencias`
- título `Descanso que eleva tu experiencia`
- texto descriptivo basado en el contenido actual de la sección

#### Patrón para otros proyectos
Si luego quieres replicar una sección tipo strip horizontal:

1. saca la sección del contenedor centrado con `w-screen`
2. usa `flex + overflow-x-auto` para mobile
3. cambia a `grid` en desktop
4. reserva la primera columna para contenido editorial
5. deja las demás columnas para media visual
6. evita `gap` grandes si quieres sensación de franja continua
7. usa `object-cover` para que todas las imágenes compartan la misma altura visual

### Nota práctica
Cuando una sección deja de ser “cards” y pasa a ser “strip”, normalmente conviene pensarla más como layout editorial que como listado de elementos.

Eso cambia varias decisiones:
- menos separación entre bloques
- más continuidad visual
- alturas compartidas
- menos texto encima de las imágenes

---

## 2026-05-22 - Convertir Servicios en carousel horizontal con autoplay infinito

### Pedido
Modificar la sección `Servicios` para que las cards se muestren en un carousel horizontal con desplazamiento automático hacia la izquierda.

Condiciones clave del pedido:
- mantener las cards individuales
- conservar bordes, sombras, iconos, hover y estilo actual
- autoplay suave y continuo
- pausa al hacer hover
- varias cards visibles en desktop
- una o dos visibles en mobile
- loop infinito sin cortes visuales

### Archivos revisados y tomados como base
- `sections/ServicesSection.tsx`
- `app/globals.css`

Tomé la sección tal como estaba en ese momento y a partir de esa versión la convertí en carousel sin cambiar la estética de cada card.

### Archivos tocados
- `sections/ServicesSection.tsx`
- `app/globals.css`

### Qué cambié
1. Quité la rejilla estática (`grid`) de servicios.
2. Reemplacé esa rejilla por un track horizontal animado.
3. Conservé el diseño interno de cada card:
   - borde
   - fondo
   - blur
   - icono
   - hover
   - elevación al pasar el mouse
4. Duplicqué visualmente el listado usando dos copias del mismo array para lograr un loop infinito.
5. Añadí una animación CSS continua que mueve el track hacia la izquierda.
6. Configuré la pausa automática al hacer hover sobre el carousel.

### Cómo se hace

#### 1. No animes cada card por separado; anima el track completo
Para un carousel continuo, lo más estable es mover una sola pista horizontal que contiene todas las tarjetas.

Aquí la estructura quedó así:

```tsx
<div className="services-marquee overflow-hidden">
  <div className="services-marquee-track flex w-max">
    <div className="flex shrink-0 items-stretch gap-5 pr-5">
      {services.map(...)}
    </div>
    <div className="flex shrink-0 items-stretch gap-5 pr-5" aria-hidden="true">
      {services.map(...)}
    </div>
  </div>
</div>
```

La idea importante es:
- contenedor externo: recorta el contenido (`overflow-hidden`)
- track interno: se anima horizontalmente
- dos grupos iguales: permiten repetir sin salto brusco

#### 2. Duplica el contenido para que el loop no se corte
Si solo animas una sola lista de cards, cuando termina el recorrido aparece un salto visible.

Por eso aquí se renderizan dos copias seguidas del mismo array:

```tsx
{[0, 1].map((copy) => (
  <div key={copy} ...>
    {services.map(...)}
  </div>
))}
```

Esto hace que cuando la primera copia sale de pantalla, la segunda ya esté entrando con exactamente el mismo contenido.

#### 3. Haz que ambas mitades midan lo mismo
El loop infinito funciona mejor si la primera mitad y la segunda mitad tienen exactamente el mismo ancho.

Para eso dejé a ambos grupos con las mismas clases:

```tsx
className="flex shrink-0 items-stretch gap-5 pr-5"
```

Ese `pr-5` en ambos grupos ayuda a que cada mitad tenga la misma medida visual y que la animación de `-50%` cierre limpio.

#### 4. Usa una animación lineal y continua
En `app/globals.css` añadí:

```css
@keyframes services-marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}
```

Y luego la clase del track:

```css
.services-marquee-track {
  animation: services-marquee 34s linear infinite;
  will-change: transform;
}
```

#### Por qué así
- `linear`: evita aceleraciones raras
- `infinite`: repite sin parar
- `translate3d`: suele ir más fino para movimiento continuo
- `34s`: velocidad tranquila, visualmente premium

#### 5. Pausa al hacer hover
Para que el usuario pueda mirar una card o interactuar con ella sin perseguirla, añadí:

```css
.services-marquee:hover .services-marquee-track {
  animation-play-state: paused;
}
```

Eso pausa el track entero al poner el cursor encima del carousel, pero no quita el hover de cada card.

#### 6. Mantén visibles varias cards según el viewport
Cada item del carousel recibió anchos responsive:

```tsx
className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[17.5rem] xl:w-[18.5rem]"
```

Eso hace que:
- en mobile se vea una card grande o una y media
- en pantallas intermedias se vean dos
- en desktop entren varias al mismo tiempo

#### 7. Conserva el diseño de la card y solo cambia el layout exterior
La card interna se dejó casi intacta:

```tsx
<div className="group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:bg-white/[0.08]">
```

Esto es importante: cuando un usuario quiere “carousel”, muchas veces no quiere rediseñar el componente, solo cambiar cómo se presenta en el layout.

### Patrón para otros proyectos
Este patrón sirve muy bien para:
- logos de clientes
- testimonios
- amenities
- categorías
- cards cortas repetibles

La receta general es:
1. contenedor con `overflow-hidden`
2. track horizontal animado
3. dos copias idénticas del contenido
4. movimiento `linear infinite`
5. pausa en hover
6. widths responsive por item

### Nota práctica
Si el contenido de cada card es muy largo o muy desigual, el marquee puede sentirse menos estable visualmente.

En esos casos conviene:
- igualar alturas
- acotar copy
- o fijar un ancho claro por item

En esta sección funcionó bien porque las cards ya tenían contenido relativamente compacto y consistente.

### para que me deje hacer commit xd
