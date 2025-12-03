// Smooth Scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ⚙️ CONFIGURACIÓN DE GOOGLE SHEETS
// IMPORTANTE: Sigue las instrucciones en INSTRUCCIONES_GOOGLE_SHEETS.md
// Reemplaza la URL de abajo con tu URL de Google Apps Script
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8YacfraJmVxt6auVJk9rWYMD-0f_fvPC11CQDQN1ac1tb5X4xj7r4PiotGZ6CuLQ5/exec";

// Función para enviar datos a Google Sheets
async function enviarAGoogleSheets(datos) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    console.log("Datos enviados a Google Sheets correctamente");
    return true;
  } catch (error) {
    console.error("Error al enviar datos a Google Sheets:", error);
    return false;
  }
}

// Manejo del formulario de contacto
const formContacto = document.getElementById("form-contacto");

if (formContacto) {
  formContacto.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    // Preparar datos para Google Sheets
    const datosFormulario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      servicio: servicio,
      mensaje: mensaje,
    };

    // Mostrar mensaje de procesamiento
    const btnSubmit = this.querySelector('button[type="submit"]');
    const textoOriginal = btnSubmit.innerHTML;
    btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btnSubmit.disabled = true;

    // Enviar a Google Sheets
    const enviado = await enviarAGoogleSheets(datosFormulario);

    // Simular un pequeño delay para que se vea el proceso
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mostrar mensaje de éxito
    btnSubmit.innerHTML = '<i class="fas fa-check"></i> Enviado';
    btnSubmit.style.background = "#10b981";

    // Mostrar notificación de éxito
    mostrarNotificacion(
      "¡Gracias por contactarnos! Hemos recibido tu consulta correctamente.",
      "success"
    );

    // Limpiar el formulario después de 1 segundo
    setTimeout(() => {
      formContacto.reset();
      // Restaurar botón después de 2 segundos
      btnSubmit.innerHTML = textoOriginal;
      btnSubmit.style.background = "";
      btnSubmit.disabled = false;
    }, 2000);
  });
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = "success") {
  // Crear elemento de notificación
  const notificacion = document.createElement("div");
  notificacion.className = `notificacion notificacion-${tipo}`;
  notificacion.innerHTML = `
    <i class="fas fa-${
      tipo === "success" ? "check-circle" : "exclamation-circle"
    }"></i>
    <span>${mensaje}</span>
  `;

  // Agregar estilos si no existen
  if (!document.getElementById("notificacion-styles")) {
    const styles = document.createElement("style");
    styles.id = "notificacion-styles";
    styles.textContent = `
      .notificacion {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 20px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
      }
      
      .notificacion-success {
        border-left: 4px solid #10b981;
      }
      
      .notificacion-error {
        border-left: 4px solid #ef4444;
      }
      
      .notificacion i {
        font-size: 24px;
      }
      
      .notificacion-success i {
        color: #10b981;
      }
      
      .notificacion-error i {
        color: #ef4444;
      }
      
      .notificacion span {
        color: #1e293b;
        font-weight: 500;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  // Agregar al body
  document.body.appendChild(notificacion);

  // Remover después de 4 segundos
  setTimeout(() => {
    notificacion.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => {
      notificacion.remove();
    }, 300);
  }, 4000);
}

// Animación al hacer scroll (aparecer elementos)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos para animación
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".feature-card, .plan-card, .valor-card, .info-card"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Resaltar enlace activo en la navegación al hacer scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Validación adicional del formulario
function validarTelefono(telefono) {
  const regex =
    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return regex.test(telefono);
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Agregar validación en tiempo real
if (formContacto) {
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");

  emailInput.addEventListener("blur", function () {
    if (!validarEmail(this.value)) {
      this.style.borderColor = "#ef4444";
    } else {
      this.style.borderColor = "#10b981";
    }
  });

  telefonoInput.addEventListener("blur", function () {
    if (!validarTelefono(this.value)) {
      this.style.borderColor = "#ef4444";
    } else {
      this.style.borderColor = "#10b981";
    }
  });
}

// Efecto parallax suave en el hero - DESACTIVADO para evitar problemas de superposición
/* 
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
*/

// Contador de caracteres para el textarea
const mensajeTextarea = document.getElementById("mensaje");
if (mensajeTextarea) {
  mensajeTextarea.addEventListener("input", function () {
    const maxLength = 500;
    const currentLength = this.value.length;

    // Crear o actualizar contador si no existe
    let contador = this.parentElement.querySelector(".char-counter");
    if (!contador) {
      contador = document.createElement("div");
      contador.className = "char-counter";
      contador.style.textAlign = "right";
      contador.style.fontSize = "0.85rem";
      contador.style.color = "#64748b";
      contador.style.marginTop = "0.25rem";
      this.parentElement.appendChild(contador);
    }

    contador.textContent = `${currentLength}/${maxLength} caracteres`;

    if (currentLength > maxLength) {
      this.value = this.value.substring(0, maxLength);
      contador.style.color = "#ef4444";
    } else {
      contador.style.color = "#64748b";
    }
  });
}

console.log("LegalFácil - Página cargada correctamente");
