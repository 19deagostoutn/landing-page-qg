---
trigger: always_on
---

# Software Design Document (SDD) & Agent Rules: Plataforma 19 de Agosto

## 1. Visión General y Directivas de Experiencia de Usuario (UX)
Este documento define la arquitectura y las reglas de desarrollo para la plataforma web.
**Directiva Crítica de Diseño:** Todo desarrollo del nuevo ecosistema, y en particular de la sección "AYUDA19", debe diseñarse con un enfoque que represente primordialmente al estudiante. La interfaz debe estar centrada 100% en la utilidad y en las herramientas del alumno, manteniendo la identidad visual de la agrupación de manera secundaria e institucional, evitando sobrecargar la utilidad con elementos de campaña.

## 2. Stack Tecnológico Estricto
El agente debe utilizar EXCLUSIVAMENTE las siguientes tecnologías:
- **Framework:** Next.js 15.2.8 (Uso obligatorio de *App Router*).
- **Core UI:** React 19 (Priorizar *Server Components*; usar la directiva `'use client'` estrictamente para estados e interactividad del DOM).
- **Estilos:** Tailwind CSS ^3.4.17.
- **Tipado:** TypeScript ^5 (Modo estricto obligatorio para las interfaces de Supabase y props de componentes).
- **BaaS (Backend as a Service):** Supabase (Autenticación y Base de Datos PostgreSQL).

## 3. Estado Actual del Sistema (Para Mantenimiento y Extensión)
La web actual cuenta con las siguientes secciones, cuyo diseño, componentes y lógica deben preservarse:

### 3.1. Página Principal (Root `/`)
- **Contenido:** Presentación de la agrupación 19 de agosto.
- **Navegación:** Botones principales ("Nuestro candidato a decano" y "Hablemos de plata").
- **Footer:** Descripción de la agrupación y medios de contacto con sus respectivos enlaces.

### 3.2. Subdominio / Ruta "Candidato a Decano"
- **Layout:** Navegación vertical.
- **Nav-bar interactiva:** Oculta por defecto. Solo se despliega al acercar el mouse (hover) a la parte superior de la pantalla.
- **Links de Nav-bar:** Inicio (preparándonos para el futuro), Candidato (Jorge Schneebeli), Plataforma (un nuevo ciclo en la UTN FRBA), Asamblea (asamblea de elección de decano), Proyectos (Dropdown con: Jorge 2025 y Hablemos de plata).
- **Footer:** Idéntico al de la página principal.

### 3.3. Subdominio / Ruta "Hablemos de Plata"
- **Layout:** Navegación vertical sobre el informe económico. Utiliza la misma lógica de Nav-bar auto-ocultable.
- **Footer Adaptado:** Basado en el footer principal, sumando una sección específica de "Recursos" propios del informe.

## 4. Arquitectura del Nuevo Módulo: "AYUDA19"
El agente debe construir este módulo respetando los siguientes requerimientos funcionales:

### 4.1. Flujo de Acceso y Autenticación
- **Punto de Entrada:** Nuevo botón en la página principal que redirija a la ruta/subdominio `19deagostoutn.com.ar/Ayuda19`. Este botón debe tener un diseño visualmente **más llamativo** y destacado que los botones preexistentes.
- **Autenticación (Supabase Auth):** Implementar la vista de inicio de sesión utilizando el proveedor de Google.
- **Restricción de Dominio (Crucial):** Validar estrictamente que solo se permitan ingresos con cuentas institucionales cuyo dominio sea `@frba.utn.edu.ar`. Cualquier otro dominio debe ser rechazado con un mensaje de error claro.
- **Ruteo Post-Autenticación (Middleware/Server Actions):**
  - *Primer Acceso:* Si el usuario no tiene un registro completo en la tabla `students_profiles`, debe ser redirigido obligatoriamente a la vista de "Onboarding" para completar su perfil.
  - *Accesos Posteriores:* Si el usuario ya completó su perfil, debe ser redirigido directamente a la "Página Principal de Ayuda 19" (Portal).

### 4.2. Header Global del Portal Ayuda 19
- **Layout Superior:** En todas las vistas internas de Ayuda 19, debe existir un Header.
- **Menú de Usuario:** Arriba a la derecha figurará el nombre del usuario (obtenido de la sesión). Al hacer clic sobre el nombre, se abrirá un menú desplegable (Dropdown) con dos opciones:
  - **Mi perfil:** Redirige a la vista de edición de datos personales.
  - **Cerrar sesión:** Ejecuta el sign-out de Supabase y redirige al root `/`.

### 4.3. Onboarding y Panel Personal (Mi Perfil)
- **Base de Datos:** Tabla `students_profiles` vinculada al `auth.users` mediante Foreign Key (`id`).
- **Lógica de Extracción de Datos (Server-Side):** El frontend **NO** debe solicitar al usuario que ingrese su nombre, apellido ni email. El Agente debe utilizar *Server Actions* para extraer el `full_name` y `email` directamente del objeto `user.user_metadata` y la sesión proveída por Google Auth.
- **Formulario de Usuario:** El estudiante solo verá y completará dos campos obligatorios:
  - **Legajo** (Input de número). Si no es un número dará mensaje de error: "Sólo números".
  - **Carrera** (Componente Select con las opciones exactas: Civil, Electrónica, Eléctrica, Industrial, Mecánica, Naval, Química, Textil).
- **Inserción:** Al guardar, el sistema combinará el legajo y la carrera con los datos extraídos de Google, insertando la fila completa en la base de datos.


### 4.4. Página Principal Ayuda 19 (El Portal)
Una vez completado el onboarding, el usuario ingresa a un dashboard central que funcionará como un hub de herramientas. Se presentará una grilla o lista de tarjetas interactivas para acceder a las siguientes secciones:
1. **Seguimiento de Plan:** - *UI/UX:* Vista tipo "roadmap" interactivo para visualizar el avance de la carrera (referencia: mockups en Artifacts). Contenedores con `overflow-x-auto` para responsividad.
   - *Lógica Dinámica:* La malla curricular se renderiza condicionalmente según la "Carrera" guardada en `students_profiles`.
   - *Semilla de Datos:* Utilizar el plan de estudios de Ingeniería Civil como prototipo funcional base para estructurar las correlatividades en la base de datos antes de escalar a otras carreras.
2. **Material de Estudio:** Repositorio o directorio organizado por carreras y materias, donde los estudiantes puedan encontrar apuntes, resúmenes y parciales resueltos.
3. **Grupos de Whatsapp:** Un directorio estructurado de enlaces de invitación a grupos de WhatsApp de cursadas, filtrable por materia y/o año.
4. **Opiniones de Profesores:** Un sistema de reseñas y calificaciones donde los alumnos puedan leer experiencias previas sobre las modalidades de enseñanza y evaluación de distintos docentes.
5. **Acceso a Aulas Virtuales:** Accesos directos y unificados a las plataformas de campus virtual utilizadas por la facultad, optimizando la navegación del alumno.
6. **Preguntas Frecuentes:** Un acordeón interactivo (FAQ) con respuestas rápidas sobre trámites administrativos, correlativas, inscripciones y vida universitaria.
7. **Tienda Online:** Catálogo digital (e-commerce visual) para gestionar la reserva o compra de merchandising de la agrupación, apuntes impresos o materiales de estudio.


## 5. Patrones de Diseño y Reglas para el Agente (Agent Constraints)
1. **Abstracción de Componentes:** Extraer la lógica de la "Nav-bar auto-ocultable" a un componente de cliente genérico para garantizar consistencia entre las vistas antiguas y el nuevo módulo.
2. **Protección de Rutas:** Emplear la arquitectura de *Server Actions* de Next.js 15 y `@supabase/ssr` para validar la sesión activa, el dominio `@frba.utn.edu.ar` y la completitud del perfil desde el servidor antes de renderizar cualquier ruta interna dentro de `/Ayuda19/`.
3. **Escalabilidad de Vistas:** Cada nueva sección listada en el apartado 4.4 debe desarrollarse en su propia carpeta bajo la estructura del *App Router* (ej. `/Ayuda19/material`, `/Ayuda19/roadmap`), compartiendo un `layout.tsx` común que inyecte el Header con el menú de usuario.
4. **Responsividad:** El "Seguimiento de Plan" requiere especial atención en Tailwind. Utilizar contenedores con `overflow-x-auto` para garantizar que los diagramas de correlativas complejos puedan navegarse correctamente en dispositivos móviles.