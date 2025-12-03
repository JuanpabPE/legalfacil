# 🌐 Configurar Dominio de Hostinger con GitHub Pages

## 📋 Paso 1: Comprar el Dominio en Hostinger

1. Ve a [hostinger.com](https://www.hostinger.com)
2. Busca tu dominio: `legalfacil.com` (o `.pe`, `.online`, etc.)
3. **IMPORTANTE:** Solo compra el **DOMINIO**, NO necesitas hosting
   - Marca solo "Domain Registration" (Registro de Dominio)
   - NO compres "Web Hosting" (no lo necesitas, GitHub Pages es gratis)
4. Completa la compra (~$10-15 USD/año)
5. Verifica tu email de confirmación

---

## ⚙️ Paso 2: Configurar DNS en Hostinger

### A. Acceder a la configuración DNS

1. Inicia sesión en [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Ve a **"Dominios"** en el menú lateral
3. Encuentra tu dominio `legalfacil.com` y haz clic en **"Administrar"**
4. Busca la opción **"DNS / Nameservers"** o **"Zona DNS"**
5. Haz clic en **"Administrar DNS"** o **"DNS Zone"**

### B. Eliminar registros existentes (si hay)

Antes de agregar los nuevos, elimina:

- ❌ Cualquier registro **A** que apunte a Hostinger
- ❌ Cualquier registro **CNAME** que diga `www` (si existe)
- ✅ Deja los registros **MX** (correo) y **TXT** si los hay

### C. Agregar los registros DNS para GitHub Pages

**Agrega estos 5 registros exactamente como se muestra:**

#### **Registros A (4 registros):**

| Tipo | Nombre/Host | Apunta a / Valor | TTL          |
| ---- | ----------- | ---------------- | ------------ |
| A    | @           | 185.199.108.153  | 14400 o Auto |
| A    | @           | 185.199.109.153  | 14400 o Auto |
| A    | @           | 185.199.110.153  | 14400 o Auto |
| A    | @           | 185.199.111.153  | 14400 o Auto |

#### **Registro CNAME (1 registro):**

| Tipo  | Nombre/Host | Apunta a / Valor    | TTL          |
| ----- | ----------- | ------------------- | ------------ |
| CNAME | www         | juanapaPE.github.io | 14400 o Auto |

**⚠️ IMPORTANTE:** Reemplaza `juanapaPE.github.io` con tu URL real de GitHub (sin la parte `/legalfacil`)

### D. Guardar los cambios

1. Haz clic en **"Agregar registro"** para cada uno
2. Verifica que los 5 registros estén correctos
3. Haz clic en **"Guardar"** o **"Guardar cambios"**

---

## 📸 Ejemplo Visual de Cómo Debería Verse:

```
Tipo    Nombre    Valor                    TTL
----    ------    -----                    ---
A       @         185.199.108.153         14400
A       @         185.199.109.153         14400
A       @         185.199.110.153         14400
A       @         185.199.111.153         14400
CNAME   www       juanapaPE.github.io     14400
```

---

## ⏳ Paso 3: ESPERAR la Propagación DNS

**Esto es CRÍTICO - NO te saltes este paso:**

- ⏱️ La propagación DNS toma entre **1 hora y 48 horas**
- 🕐 Normalmente funciona en **2-6 horas**
- ☕ Ve por un café, come algo, relájate

### Verificar el estado de propagación:

1. Ve a [dnschecker.org](https://dnschecker.org)
2. Escribe tu dominio: `legalfacil.com`
3. Selecciona tipo: **A**
4. Haz clic en **"Search"**
5. Cuando veas los 4 IPs de GitHub (185.199.108.153, etc.) en verde → ¡Está listo!

También verifica el CNAME:

1. En dnschecker.org
2. Escribe: `www.legalfacil.com`
3. Tipo: **CNAME**
4. Debe mostrar: `juanapaPE.github.io`

---

## 🔗 Paso 4: Conectar el Dominio a GitHub Pages

**Solo haz esto DESPUÉS de que el DNS se haya propagado (Paso 3)**

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En la sección **"Custom domain"**:
   - Escribe: `legalfacil.com` (sin www)
4. Haz clic en **"Save"**
5. **Espera 1-2 minutos**
6. Recarga la página
7. Si todo está bien, verás un check verde ✅
8. Marca la casilla **"Enforce HTTPS"**

---

## ✅ Paso 5: Verificar que Todo Funciona

Prueba estas URLs en tu navegador:

1. ✅ `http://legalfacil.com` → Debe funcionar
2. ✅ `https://legalfacil.com` → Debe funcionar (con HTTPS)
3. ✅ `http://www.legalfacil.com` → Debe funcionar
4. ✅ `https://www.legalfacil.com` → Debe funcionar
5. ✅ `https://juanapaPE.github.io/legalfacil/` → Debe redirigir a tu dominio

---

## 🎯 Configuración Opcional pero Recomendada

### Crear un archivo CNAME en tu repositorio

Esto ayuda a mantener el dominio configurado:

1. En tu repositorio de GitHub, haz clic en **"Add file"** → **"Create new file"**
2. Nombre del archivo: `CNAME` (todo en mayúsculas, sin extensión)
3. Contenido del archivo: `legalfacil.com` (solo eso, una línea)
4. Haz clic en **"Commit new file"**

---

## 🆘 Solución de Problemas Comunes

### ❌ Error: "DNS check unsuccessful"

**Causa:** El DNS no se ha propagado todavía
**Solución:**

- Espera más tiempo (hasta 48 horas)
- Verifica en dnschecker.org
- Asegúrate de haber puesto los 4 IPs correctos

### ❌ Error: "Both legalfacil.com and its alternate name are improperly configured"

**Causa:** Los registros DNS no están bien configurados
**Solución:**

1. Verifica los 5 registros en Hostinger
2. El CNAME debe ser `juanapaPE.github.io` (sin /legalfacil)
3. Espera más tiempo para propagación

### ❌ El sitio no carga o muestra error 404

**Solución:**

1. Verifica que el archivo `index.html` esté en la raíz del repositorio
2. Asegúrate de que el repositorio sea público
3. Ve a Settings → Pages y verifica que esté activo

### ⚠️ "Enforce HTTPS" no se puede activar

**Causa:** GitHub está esperando el certificado SSL
**Solución:**

- Espera 24 horas después de configurar el dominio
- GitHub genera el certificado automáticamente
- Vuelve a intentar al día siguiente

---

## 📊 Resumen de Tiempos

```
Comprar dominio en Hostinger          → 5-10 minutos
Configurar DNS en Hostinger            → 5 minutos
Esperar propagación DNS                → 1-48 horas (promedio 4-6 horas)
Agregar dominio en GitHub Pages        → 2 minutos
Activar HTTPS                          → 1-24 horas (automático)
```

**Total:** Entre 6 horas y 3 días (normalmente 1 día)

---

## 💰 Costos

- **Dominio .com:** ~$10-15 USD/año en Hostinger
- **Dominio .pe:** ~$20-30 USD/año
- **Dominio .online:** ~$5-8 USD/año
- **GitHub Pages:** GRATIS ✅
- **Hosting:** GRATIS (no lo necesitas) ✅
- **SSL/HTTPS:** GRATIS ✅

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tu sitio estará disponible en:

- ✅ `https://legalfacil.com`
- ✅ `https://www.legalfacil.com`

Y seguirá funcionando en:

- ✅ `https://juanapaPE.github.io/legalfacil/` (redirige automáticamente)

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas en algún paso específico, avísame y te ayudo a resolverlo.

**Nota Importante:** No compres hosting en Hostinger, solo el dominio. GitHub Pages es tu hosting gratis. 💪
