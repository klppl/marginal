# GEMINI.md

## Project Overview

This project is a Ghost theme called "marginal". It is designed to be a retro-minimalist theme with a focus on the IndieWeb, dark mode, and high customizability. It is built with Handlebars for templating, and uses PostCSS for CSS processing. The theme is lightweight, with no client-side JavaScript dependencies.

The theme features:
- IndieWeb microformats
- Dark mode
- 8 color palettes
- 8 font choices
- Adjustable density and layout alignment
- Ghost Members support

## Building and Running

### Development

To run the theme in a local Ghost development environment:

1.  Clone the repository.
2.  Symlink the theme directory into your Ghost installation's `content/themes` directory.
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    This will watch for changes to `.hbs`, `.css`, and `.js` files and reload the browser automatically.

### Building

To create a production build of the theme:

```bash
npm run build
```

This will compile the CSS and JavaScript assets into the `assets/built/` directory.

### Testing

To validate the theme with `gscan`:

```bash
npm run test
```

### Deployment

To create a distributable zip file of the theme:

```bash
npm run zip
```

## Development Conventions

The CSS is structured with a main entry point at `assets/css/index.css`, which imports all other CSS files. The CSS architecture uses custom properties for theming and layout adjustments. The color palettes are defined using OKLCH values with hex fallbacks.
