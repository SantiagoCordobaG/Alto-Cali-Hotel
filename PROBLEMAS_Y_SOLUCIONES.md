# Problemas Encontrados y Soluciones

## Resumen
Al abrir el proyecto aparecieron varios problemas encadenados: configuración incompleta de Tailwind CSS v4, un icono inválido de `lucide-react`, dependencia de Google Fonts en un entorno sin red y comportamiento inestable de Turbopack para ciertas validaciones.

La aplicación ya quedó corregida a nivel de código y la compilación fue validada correctamente con Webpack.

---

## Problemas Identificados

### 1. Error de conexión inicial en el navegador
**Síntoma:** `ERR_CONNECTION_REFUSED` al abrir `http://localhost:3000/`

**Causa:** El servidor de desarrollo no estaba corriendo o había quedado en un estado anterior con errores.

**Solución:**
```bash
npm run dev
```

Si el servidor ya estaba abierto antes de corregir los archivos, conviene reiniciarlo y recargar el navegador.

---

### 2. Error del plugin de PostCSS con Tailwind CSS v4
```text
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
The PostCSS plugin has moved to a separate package...
```

**Causa:** Tailwind CSS v4 ya no usa `tailwindcss` directamente como plugin de PostCSS.

**Solución aplicada:**
1. Instalar `@tailwindcss/postcss`
2. Configurar `postcss.config.js` así:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

---

### 3. Error de icono inexistente en `lucide-react`
```text
Export Instagram doesn't exist in target module
```

**Causa:** El icono `Instagram` no está disponible en la versión instalada de `lucide-react`.

**Solución aplicada:** En `components/Footer.tsx` se reemplazó `Instagram` por `Share2`.

---

### 4. Error de utilidades desconocidas en `app/globals.css`
```text
CssSyntaxError: Cannot apply unknown utility class `shadow-premium`
```

**Causa real:** Aunque `shadow-premium` sí estaba definido en `tailwind.config.ts`, Tailwind v4 no estaba cargando esa configuración desde `app/globals.css`.

**Solución aplicada:** Se agregó la directiva `@config` al inicio de `app/globals.css`.

```css
@import "tailwindcss";
@config "../tailwind.config.ts";
```

Con esto Tailwind vuelve a reconocer extensiones del tema como:
- `shadow-premium`
- `text-champagne`
- `bg-coal`
- `font-serif`

---

### 5. Ajuste de sintaxis para Tailwind CSS v4
**Causa:** Tailwind v4 ya no usa:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Solución aplicada:** `app/globals.css` fue migrado a la sintaxis correcta:

```css
@import "tailwindcss";

@layer components {
  .premium-container {
    @apply mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8;
  }
}
```

---

### 6. Fallo al descargar Google Fonts en entornos sin conexión
```text
Failed to fetch `Cormorant Garamond` from Google Fonts.
Failed to fetch `Inter` from Google Fonts.
```

**Causa:** `app/layout.tsx` usaba `next/font/google`, lo que obliga a descargar fuentes durante build/dev en algunos entornos.

**Solución aplicada:**
- Se eliminó el uso de `next/font/google` en `app/layout.tsx`
- Se dejaron variables CSS con fuentes de respaldo locales en `app/globals.css`

Esto evita que el proyecto dependa de conexión externa para arrancar.

---

### 7. Problemas de Turbopack al validar en este entorno
**Síntoma observado durante validación:**
```text
Operation not permitted (os error 1)
```

**Causa:** Turbopack falló en este entorno de ejecución al intentar crear procesos/puertos internos para ciertas tareas de build.

**Solución práctica usada para validar el proyecto:** ejecutar la compilación con Webpack:

```bash
npx next build --webpack
```

La compilación terminó correctamente con esa ruta.

---

## Cambios Realizados

| Archivo | Cambio | Motivo |
|---------|--------|--------|
| `package.json` | Se dejó `@tailwindcss/postcss` en dependencias de desarrollo | Requerido por Tailwind CSS v4 |
| `postcss.config.js` | Usa `@tailwindcss/postcss` | Compatibilidad con Tailwind v4 |
| `app/globals.css` | Se migró a `@import "tailwindcss"` | Sintaxis correcta de Tailwind v4 |
| `app/globals.css` | Se agregó `@config "../tailwind.config.ts";` | Cargar extensiones personalizadas como `shadow-premium` |
| `app/globals.css` | Se añadieron variables CSS para fuentes locales de respaldo | Evitar dependencia de Google Fonts |
| `app/layout.tsx` | Se eliminó `next/font/google` | Evitar fallos de red al arrancar |
| `components/Footer.tsx` | Se reemplazó `Instagram` por `Share2` | El icono anterior no existía |
| `next.config.mjs` | `reactStrictMode: false` | Ajuste previo de compatibilidad |

---

## Estado Final

### Código
El código quedó corregido para que:
- Tailwind reconozca las utilidades personalizadas
- La app no dependa de Google Fonts para arrancar
- El footer no falle por el icono inexistente

### Validación realizada
Se comprobó que el proyecto compila correctamente con:

```bash
npx next build --webpack
```

### Servidor de desarrollo
Si el servidor ya estaba ejecutándose antes de las correcciones, puede seguir mostrando el error anterior hasta reiniciarlo. Lo recomendable es:

```bash
npm run dev
```

Y luego abrir:

```text
http://localhost:3000
```

Si el puerto `3000` está ocupado, Next usará otro puerto disponible.

---

## Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Validar compilación evitando Turbopack
npx next build --webpack

# Instalar dependencias
npm install

# Limpiar caché y reinstalar si algo queda corrupto
rm -rf node_modules package-lock.json .next
npm cache clean --force
npm install
```

---

## Nota Importante
El error de `shadow-premium` no se debía a que la clase estuviera mal escrita ni a que faltara en el `tailwind.config.ts`. El problema era que Tailwind v4 no estaba leyendo esa configuración desde `app/globals.css`.

Ese fue el punto que impedía que la página se viera correctamente aunque parte del proyecto ya hubiera sido ajustado antes.
