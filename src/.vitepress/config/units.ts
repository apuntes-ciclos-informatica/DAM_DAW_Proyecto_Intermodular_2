// ============================================================================
// CONFIGURACIÓN DE UNIDADES — Navegación y Contenidos
// ============================================================================
//
// 👤 EDITA ESTE ARCHIVO para definir los módulos/unidades del curso
//    y su navegación (navbar y sidebar).
//
// CONCEPTOS CLAVE:
//   Unidad (unit) — Un bloque de contenido con su propia navegación.
//                   Aquí, cada unidad es una sesión del módulo.
//   Navbar        — Menú horizontal en la barra superior.
//   Sidebar       — Panel de navegación lateral izquierdo.
//   code          — Prefijo de URL de los archivos de esta unidad.
//                   Ejemplo: code = 's1' → los links apuntan a /s1/...
//
// FLUJO RÁPIDO:
//   1. Crea los archivos .md en src/<code>/contenidos/
//   2. Añade los links aquí (en navbar y sidebar)
//   3. El sistema detecta todas las unidades automáticamente:
//        /<code>/ → carga el sidebar de esa unidad
//        /        → raíz sin sidebar (guía didáctica)
//
// ============================================================================

import { DefaultTheme } from 'vitepress'
import type { NavGroup } from '../shared/navigation'

// ============================================================================
// 1. NAVBARS Y SIDEBARS
// ============================================================================

// ── Sesión 1 · Gestión de proyectos ────────────────────────────────────────
const s1Items: DefaultTheme.SidebarItem[] = [
  { text: 'Inicio', link: '/contenidos/' },
  { text: '1. Fundamentos de la gestión de proyectos', link: '/contenidos/capitulo-1-fundamentos' },
  { text: '2. Metodologías. El MVP', link: '/contenidos/capitulo-2-metodologias-el-mvp' },
  { text: '3. Iniciación MVP', link: '/contenidos/capitulo-3-iniciacion-mvp' },
  { text: '4. Planificación Ágil', link: '/contenidos/capitulo-4-planificacion-agil' },
  { text: '5. Construcción, Medición y Aprendizaje', link: '/contenidos/capitulo-5-construccion-medicion-aprendizaje' },
  { text: '6. Lanzamiento', link: '/contenidos/capitulo-6-lanzamiento' },
  { text: '7. Triple restricción', link: '/contenidos/capitulo-7-triple-restriccion' },
  { text: '8. Roles', link: '/contenidos/capitulo-8-roles' },
]

const s1Sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Gestión de proyectos',
    collapsed: false,
    items: s1Items,
  },
]

// ── Sesión 2 · Metodologías Ágiles. Scrum ──────────────────────────────────
const s2Items: DefaultTheme.SidebarItem[] = [
  { text: 'Inicio', link: '/contenidos/' },
  { text: '1. Metodologías', link: '/contenidos/capitulo-1-metodologias' },
  { text: '2. Metodologías Tradicionales', link: '/contenidos/capitulo-2-tradicional' },
  { text: '3. Metodologías Ágiles', link: '/contenidos/capitulo-3-agil' },
  { text: '4. Scrum (I)', link: '/contenidos/capitulo-4-scrum-1' },
  { text: '5. Scrum (II)', link: '/contenidos/capitulo-5-scrum-2' },
  { text: '6. Scrum (III)', link: '/contenidos/capitulo-6-scrum-3' },
  { text: '7. Ejemplo práctico', link: '/contenidos/capitulo-7-ejemplo-scrum' },
]

const s2Sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Metodologías Ágiles. Scrum',
    collapsed: false,
    items: s2Items,
  },
]

// ============================================================================
// 2. REGISTRO DE UNIDADES
// ============================================================================
// Propiedades de cada unidad:
//   id        — Identificador único (debe coincidir con la clave del objeto)
//   code      — Prefijo de URL. Los links del navbar/sidebar se prefijarán
//               automáticamente con /<code>/
//   title     — Nombre corto (aparece en el desplegable del navbar)
//   fullTitle — Nombre completo (pestaña del navegador)
//   siteTitle — Nombre en el sidebar (puede usar </br> para saltos de línea)
//   icon      — Emoji decorativo
//   navbar    — Barra superior. El navbar global lo aporta `root`; en las
//               sesiones basta con el enlace a la guía. El desplegable de
//               sesiones se define abajo, en unitNavbars.
//   sidebar   — Ítems del panel lateral de esta unidad

export interface UnitConfig {
  id: string
  code: string
  title: string
  fullTitle: string
  siteTitle: string
  icon: string
  navbar: DefaultTheme.NavItem[]
  sidebar: DefaultTheme.SidebarItem[]
}

export const UNITS: Record<string, UnitConfig> = {

  // Guía didáctica (src/index.md) — sin sidebar de curso.
  // Con varias unidades registradas, sus títulos son los del sitio completo.
  root: {
    id: 'root',
    code: 'root',
    title: 'Proyecto Intermodular I',
    fullTitle: 'Proyecto intermodular I',
    siteTitle: 'Proyecto </br>intermodular I',
    icon: '🏠',
    navbar: [{ text: '🏠 Guía Didáctica', link: '/' }],
    sidebar: []
  },

  S1: {
    id: 'S1',
    code: 's1',         // → archivos en src/s1/
    title: 'Sesión 1',
    fullTitle: 'Sesión 1 · Fundamentos del Project Management',
    siteTitle: 'Proyecto </br>intermodular I',
    icon: '📋',
    navbar: [{ text: '🏠 Guía Didáctica', link: '/' }],
    sidebar: s1Sidebar
  },

  S2: {
    id: 'S2',
    code: 's2',         // → archivos en src/s2/
    title: 'Sesión 2',
    fullTitle: 'Sesión 2 · Metodologías Ágiles. Scrum',
    siteTitle: 'Proyecto </br>intermodular I',
    icon: '🏃',
    navbar: [{ text: '🏠 Guía Didáctica', link: '/' }],
    sidebar: s2Sidebar
  },

}

// ============================================================================
// FUNCIONES DE ACCESO — No modificar
// ============================================================================

export function getAllUnitsArray(): UnitConfig[] {
  return Object.values(UNITS)
}

export function getUnitByCode(code: string): UnitConfig | undefined {
  return UNITS[code]
}

// ── Navbar dinámico por unidad ───────────────────────────────────────────
// Desplegable «📚 Sesiones» que aparece en la barra superior solo cuando
// estás dentro de una sesión. Es acumulativo: dentro de la sesión N se
// listan la N y todas las anteriores, nunca las futuras.
//
// Al añadir la sesión 3: crear su entrada aquí copiando la lista de s2 y
// añadiendo la nueva línea al final.
const S1 = { text: 'S1 — Fundamentos del Project Management', link: '/s1/contenidos/' }
const S2 = { text: 'S2 — Metodologías Ágiles. Scrum',         link: '/s2/contenidos/' }

export const unitNavbars: Record<string, NavGroup[]> = {
  s1: [{ text: '📚 Sesiones', items: [S1] }],
  s2: [{ text: '📚 Sesiones', items: [S1, S2] }],
}
