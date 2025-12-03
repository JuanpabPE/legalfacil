# 🚀 Guía Completa: Publicar LegalFácil en GitHub Pages

## 📋 Parte 1: Publicar en GitHub Pages (GRATIS)

### Paso 1: Crear una cuenta en GitHub

1. Ve a [github.com](https://github.com)
2. Haz clic en **"Sign up"** (Registrarse)
3. Ingresa:
   - Tu email
   - Crea una contraseña
   - Elige un nombre de usuario (ej: `pablolegal`, `legalfacil`, etc.)
4. Verifica tu email
5. ¡Listo! Ya tienes cuenta

---

### Paso 2: Crear un Repositorio (donde guardarás tu sitio)

1. Una vez dentro de GitHub, haz clic en el **botón verde "New"** o en el **símbolo +** arriba a la derecha
2. Selecciona **"New repository"**
3. Completa la información:
   - **Repository name**: `legalfacil` (o el nombre que prefieras)
   - **Description**: "Sitio web de LegalFácil - Asesoría Legal"
   - Selecciona **"Public"** (debe ser público para GitHub Pages gratis)
   - ✅ Marca **"Add a README file"**
4. Haz clic en **"Create repository"**

---

### Paso 3: Subir tus archivos a GitHub

Tienes 2 opciones (elige la que prefieras):

#### **OPCIÓN A: Subir por la web (MÁS FÁCIL)** ⭐

1. En tu repositorio recién creado, haz clic en **"Add file"** → **"Upload files"**
2. **Arrastra todos los archivos** de tu carpeta `LegalFacil`:

   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - La carpeta `img/` completa (con los logos)
   - `INSTRUCCIONES_GOOGLE_SHEETS.md`
   - `test-google-sheets.html`

3. Espera a que se carguen todos los archivos
4. En la parte de abajo, escribe un mensaje: "Primera versión del sitio web"
5. Haz clic en **"Commit changes"**

#### **OPCIÓN B: Usar GitHub Desktop (MÁS PROFESIONAL)**

1. Descarga [GitHub Desktop](https://desktop.github.com)
2. Instálalo e inicia sesión con tu cuenta
3. Haz clic en **"Clone a repository"**
4. Selecciona el repositorio `legalfacil` que creaste
5. Elige dónde guardarlo en tu PC
6. Copia todos tus archivos de `LegalFacil` a esa carpeta
7. En GitHub Desktop verás los cambios
8. Escribe un mensaje: "Primera versión del sitio web"
9. Haz clic en **"Commit to main"**
10. Haz clic en **"Push origin"**

---

### Paso 4: Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **"Settings"** (Configuración) - está en la barra superior
2. En el menú izquierdo, busca y haz clic en **"Pages"**
3. En **"Source"** (Fuente):
   - Branch: Selecciona **"main"** (o "master")
   - Folder: Deja **"/ (root)"**
4. Haz clic en **"Save"** (Guardar)
5. ¡Espera 1-2 minutos!
6. **Recarga la página**
7. Verás un mensaje verde que dice: **"Your site is live at https://tunombre.github.io/legalfacil/"**

---

### Paso 5: Probar tu sitio

1. Haz clic en el enlace que aparece (será algo como: `https://tunombre.github.io/legalfacil/`)
2. ¡Tu sitio ya está en línea! 🎉
3. Comparte ese enlace con quien quieras

---

## 🌐 Parte 2: Conectar un Dominio Personalizado (Opcional)

Si quieres tener `www.legalfacil.com` en lugar de `tunombre.github.io/legalfacil`

### Paso 1: Comprar un Dominio

Puedes comprar en:

- **Namecheap**: ~$8-12 USD/año (Recomendado - económico)
- **GoDaddy**: ~$12-15 USD/año
- **Hostinger**: ~$10 USD/año
- **Google Domains**: ~$12 USD/año

**Dominios disponibles para LegalFácil:**

- `legalfacil.com`
- `legalfacil.pe` (si es para Perú)
- `legalfacil.online`
- `legalfacil.legal`

---

### Paso 2: Configurar DNS en tu proveedor de dominio

#### Si compraste en **Namecheap**:

1. Inicia sesión en Namecheap
2. Ve a **"Domain List"** → Selecciona tu dominio
3. Haz clic en **"Manage"**
4. Ve a **"Advanced DNS"**
5. Agrega estos registros:

| Type         | Host | Value              | TTL       |
| ------------ | ---- | ------------------ | --------- |
| A Record     | @    | 185.199.108.153    | Automatic |
| A Record     | @    | 185.199.109.153    | Automatic |
| A Record     | @    | 185.199.110.153    | Automatic |
| A Record     | @    | 185.199.111.153    | Automatic |
| CNAME Record | www  | tunombre.github.io | Automatic |

**Importante:** Reemplaza `tunombre.github.io` con tu URL real de GitHub Pages

6. Guarda los cambios

#### Si compraste en **GoDaddy**:

1. Inicia sesión en GoDaddy
2. Ve a **"My Products"** → **"DNS"**
3. Agrega los mismos registros de arriba

#### Si compraste en **Hostinger**:

1. Ve a **"Dominios"** → **"DNS/Nameservers"**
2. Selecciona **"DNS Zone"**
3. Agrega los mismos registros

---

### Paso 3: Configurar el dominio en GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **"Settings"** → **"Pages"**
3. En **"Custom domain"** escribe tu dominio: `legalfacil.com` (o el que compraste)
4. Haz clic en **"Save"**
5. Espera unos minutos
6. ✅ Marca la casilla **"Enforce HTTPS"** (para que sea seguro con https://)

---

### Paso 4: Esperar la propagación DNS

- ⏱️ Puede tomar entre **10 minutos y 48 horas**
- Normalmente funciona en **1-4 horas**
- Puedes verificar el estado en: [dnschecker.org](https://dnschecker.org)

---

## ✅ ¡Listo! Tu sitio estará en:

- **URL Gratis**: `https://tunombre.github.io/legalfacil/`
- **Con dominio propio**: `https://www.legalfacil.com` (o el que compraste)

---

## 🔄 Cómo Actualizar tu Sitio

Cada vez que quieras hacer cambios:

### **Opción Web:**

1. Ve a tu repositorio en GitHub
2. Haz clic en el archivo que quieres editar
3. Haz clic en el ícono del lápiz (Edit)
4. Haz los cambios
5. Scroll abajo → "Commit changes"
6. Los cambios se reflejan en 1-2 minutos

### **Opción GitHub Desktop:**

1. Edita los archivos en tu PC
2. Abre GitHub Desktop
3. Verás los cambios
4. Escribe un mensaje de commit
5. Haz clic en "Commit" y luego "Push"
6. ¡Listo!

---

## 💡 Consejos Importantes

### ✅ **Ventajas de GitHub Pages:**

- Hosting 100% GRATIS para siempre
- SSL/HTTPS gratis (sitio seguro)
- Sin límite de visitas
- Sin publicidad
- Actualizaciones instantáneas
- Control de versiones (historial de cambios)

### ⚠️ **Limitaciones:**

- El sitio debe ser estático (HTML, CSS, JS)
- No soporta PHP, bases de datos, etc.
- Pero tu formulario de Google Sheets funciona perfecto ✅

### 🎯 **SEO (Posicionamiento en Google):**

Para que Google encuentre tu sitio:

1. Registra tu sitio en [Google Search Console](https://search.google.com/search-console)
2. Crea un archivo `sitemap.xml` (te puedo ayudar)
3. Agrega meta tags (ya están en tu sitio)

---

## 🆘 Solución de Problemas

### **No veo mi sitio después de activar GitHub Pages:**

- Espera 2-5 minutos y recarga
- Verifica que el archivo se llame exactamente `index.html`
- Asegúrate de que el repositorio sea público

### **Mi dominio no funciona:**

- Verifica los registros DNS (tarda hasta 48h)
- Asegúrate de haber guardado en GitHub Pages
- Prueba en modo incógnito del navegador

### **Los estilos no cargan:**

- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Revisa las rutas en el HTML

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas en algún paso, avísame y te ayudo a resolverlo.

**¡Éxito con tu sitio web!** 🚀
