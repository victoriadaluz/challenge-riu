# Challenge RIU — Frontend

Maquetación de interfaz a partir de diseño Figma en Angular 18+.

## Tecnologías

- Angular 21
- Tailwind CSS 4
- TypeScript

## Estructura

El proyecto sigue **Atomic Design** con **BEM** como buenas prácticas.
```
src/app/
├── core/
│   └── models/
├── components/
│   ├── atoms/        # button, search-input
│   ├── molecules/    # article-card
│   └── organisms/    # featured-article, articles-grid, gallery
└── pages/
    └── home/
```

## Sobre el styling

La mayor parte del estilo vive en los templates HTML como clases de Tailwind, no en archivos CSS separados. Esto es intencional: Tailwind 4 está diseñado para trabajar así, y se complementa con los componentes standalone de Angular. Es por eso que pueden observar en los porcentajes de GitHub que hay más HTML y TypeScript que CSS. 

Los archivos `.css` de componente quedaron vacíos o con estilos mínimos. El único CSS global relevante está en `styles.css`, donde definí los tokens del diseño del Figma usando `@theme`.

BEM lo implementé de forma semántica en las clases, no como sistema de estilos. 

Utilicé PixelParallel para comparar entre diseño y maquetado.

## Desafíos

**Tailwind 4 con Angular:** La integración de Tailwind 4 vía `@tailwindcss/postcss` tuvo algunas fricciones iniciales — `@apply` no funcionó como en versiones previas, y algunas clases necesité reajustarlas para alinearme al diseño original. Esto está evidenciado en el historial de commits a lo largo de los días, que por costumbre decidí commitear en inglés.

**Scroll horizontal en galería mobile:** La sección 3 en mobile está hecha con scroll horizontal nativo con CSS (`overflow-x-auto` y `snap-x`) sin dependencias adicionales.

## Instalación
```bash
npm install
ng serve
```