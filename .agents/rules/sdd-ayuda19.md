---
trigger: always_on
---

# Software Design Document (SDD) & Agent Rules: Plataforma 19 de Agosto

## 1. Visión General y Directivas de Experiencia de Usuario (UX)
Este documento define la arquitectura y las reglas de desarrollo para la plataforma web.
**Directiva Crítica de Diseño:** Todo desarrollo del nuevo ecosistema, y en particular de la sección "AYUDA19", debe diseñarse con un enfoque que represente primordialmente al estudiante. La interfaz debe estar centrada 100% en las herramientas del alumno, manteniendo la identidad visual de la agrupación de manera secundaria e institucional, evitando sobrecargar la utilidad con elementos de campaña.

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
- **Punto de Entrada:** Nuevo botón en la página principal, visualmente consistente con los ya existentes, que redirija a la ruta/subdominio `19deagostoutn.com.ar/Ayuda19`.
- **Autenticación (Supabase Auth):** Implementar la vista de inicio de sesión utilizando el proveedor de Google.
- **Restricción de Dominio (Crucial):** Validar estrictamente que solo se permitan ingresos con cuentas institucionales cuyo dominio sea `@frba.utn.edu.ar`. Cualquier otro dominio debe ser rechazado con un mensaje de error claro.

### 4.2. Panel Personal (Dashboard)
- **Base de Datos (Supabase):** Crear y tipar una tabla `students_profiles` vinculada al `auth.users`.
- **Formulario de Onboarding / Perfil:** Una vez autenticado, el usuario tendrá acceso a un panel personal donde podrá cargar y actualizar:
  - Nombre
  - Apellido
  - Legajo
  - Carrera (Componente Select con las opciones exactas: Civil, Química, Industrial, Mecánica, Naval, Electrónica, Eléctrica, Textil).

### 4.3. Seguimiento de Plan (Roadmap Interactivo)
- **Interfaz (UI):** Construir una vista tipo "roadmap" interactivo para visualizar el avance de la carrera, tomando como referencia de diseño estético la captura de pantalla adjunta en los *Artifacts* del proyecto.
- **Lógica Dinámica:** La estructura de la malla curricular (materias, años, correlatividades) debe renderizarse condicionalmente según la "Carrera" guardada en el perfil del estudiante.
- **Desarrollo y Semilla de Datos:** Para estructurar la lógica de nodos relacionales en la base de datos (materias y sus requisitos de correlatividad), el agente utilizará el plan de estudios de Ingeniería Civil como prototipo funcional base. Una vez validada la visualización interactiva para este plan, la estructura se escalará al resto de las carreras.

## 5. Patrones de Diseño y Reglas para el Agente (Agent Constraints)
1. **Abstracción de Componentes:** Extraer la lógica de la "Nav-bar auto-ocultable" (usando detección de posición del puntero o scroll) a un componente de cliente genérico para garantizar consistencia entre las vistas antiguas y el nuevo módulo.
2. **Protección de Rutas:** Emplear la arquitectura de *Server Actions* de Next.js 15 y el paquete SSR de Supabase (`@supabase/ssr`) para validar la sesión activa y el dominio del usuario desde el servidor antes de renderizar la ruta `/Ayuda19/dashboard`.
3. **Responsividad:** El "Seguimiento de Plan" requiere especial atención en Tailwind. Utilizar contenedores con `overflow-x-auto` para garantizar que los diagramas de correlativas complejos puedan navegarse correctamente en dispositivos móviles.