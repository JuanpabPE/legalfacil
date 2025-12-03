# 🔒 Solución: HTTPS no disponible en GitHub Pages

## ❌ Error Actual:

```
Unavailable for your site because your domain is not properly configured
to support HTTPS (legalfacil.org)
```

## 🔍 Causas Comunes:

### 1. **GitHub aún está generando el certificado SSL**

- Tiempo normal: 1-4 horas
- Tiempo máximo: 24 horas
- **Solución:** Esperar pacientemente

### 2. **Falta el registro CAA en Hostinger**

El registro CAA autoriza a Let's Encrypt a generar certificados SSL.

---

## ✅ SOLUCIÓN PASO A PASO:

### **Paso 1: Agregar registro CAA en Hostinger**

1. Ve a Hostinger → DNS de `legalfacil.org`
2. En "Administrar registros DNS", agrega un nuevo registro:

   - **Tipo:** CAA
   - **Nombre/Host:** @ (o déjalo vacío)
   - **Flags:** 0
   - **Tag:** issue
   - **Valor/Value:** `letsencrypt.org`
   - **TTL:** 14400

3. Haz clic en "Agregar registro"

**Nota:** Es posible que Hostinger no permita agregar registros CAA desde su panel. En ese caso, los registros CAA que ya tienes (comodoca.com, digicert.com) deberían funcionar.

---

### **Paso 2: Verificar que NO tengas CAA restrictivos**

En Hostinger, verifica tus registros CAA actuales:

- Si tienes registros CAA que SOLO autorizan proveedores específicos (como "comodoca.com")
- Y NO incluyen "letsencrypt.org"
- Entonces GitHub no puede generar el certificado

**Solución:**

1. Borra TODOS los registros CAA existentes
2. Deja que GitHub use el SSL automáticamente
3. O agrega uno nuevo solo para `letsencrypt.org`

---

### **Paso 3: Crear archivo CNAME en GitHub**

1. Ve a tu repositorio: https://github.com/JuanapaPE/legalfacil
2. Haz clic en **"Add file"** → **"Create new file"**
3. Nombre del archivo: `CNAME` (todo en mayúsculas, sin extensión .txt)
4. Contenido del archivo (solo una línea):
   ```
   legalfacil.org
   ```
5. Scroll abajo → **"Commit new file"**

---

### **Paso 4: Remover y volver a agregar el dominio**

1. Ve a GitHub → Settings → Pages
2. En "Custom domain", haz clic en **"Remove"**
3. **Espera 2 minutos**
4. Vuelve a escribir: `legalfacil.org`
5. Haz clic en **"Save"**
6. **Espera 30 minutos a 2 horas**

---

### **Paso 5: Verificar propagación DNS con CAA**

1. Ve a [dnschecker.org](https://dnschecker.org)
2. Escribe: `legalfacil.org`
3. Tipo: **CAA**
4. Haz clic en Search
5. Verifica qué registros CAA aparecen

---

## 🎯 Configuración Óptima de DNS en Hostinger:

```
Tipo      Nombre    Valor                    TTL
----      ------    -----                    -----
A         @         185.199.108.153         14400
A         @         185.199.109.153         14400
A         @         185.199.110.153         14400
A         @         185.199.111.153         14400
CNAME     www       juanpabpe.github.io     14400
CAA       @         0 issue "letsencrypt.org" 14400  ← IMPORTANTE
```

**O simplemente NO tener registros CAA** (GitHub lo manejará automáticamente)

---

## ⚠️ IMPORTANTE:

### **Opción A: Borrar todos los registros CAA**

- Borra todos los CAA de Hostinger
- Deja que GitHub maneje el SSL automáticamente
- Esto suele funcionar mejor

### **Opción B: Dejar solo un CAA para Let's Encrypt**

- Borra todos los CAA excepto uno
- Ese único debe ser: `0 issue "letsencrypt.org"`

---

## 🕐 Línea de Tiempo:

```
Ahora: Borrar registros CAA innecesarios
  ↓
+5 min: Crear archivo CNAME en GitHub
  ↓
+10 min: Remove y volver a agregar dominio en GitHub Pages
  ↓
+30 min: Esperar propagación DNS
  ↓
+1-2 horas: GitHub genera certificado SSL
  ↓
¡Listo! Marca "Enforce HTTPS"
```

---

## 🆘 Si después de 24 horas sigue sin funcionar:

Contacta al soporte de GitHub:
https://support.github.com/contact

O prueba estas alternativas:

1. Usa Cloudflare (proxy gratis con SSL)
2. Usa Netlify en lugar de GitHub Pages
3. Espera 48 horas (a veces tarda mucho)

---

## ✅ Resumen de Acciones AHORA:

1. **BORRA** los registros CAA en Hostinger (excepto 1 o ninguno)
2. **CREA** el archivo CNAME en GitHub
3. **REMOVE** y vuelve a agregar el dominio en GitHub Pages
4. **ESPERA** 2-4 horas
5. **VERIFICA** si "Enforce HTTPS" se activa

---

¿Quieres que te ayude con alguno de estos pasos específicamente?
