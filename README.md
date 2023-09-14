# SVGR Integration for Rendering SVG Elements in React Components

This project leverages [SVGR](https://react-svgr.com), a powerful tool for transforming SVGs into React components. SVGR simplifies the integration of SVG graphics into your React applications.

## Installation

Before you can start using SVGR, you'll need to install it as a command-line tool and configure it to work with your project. Follow these steps:

1. Install SVGR as a development dependency using npm:

```bash
npm install --save-dev @svgr/cli
```

## Configure SVGR

To fine-tune SVGR according to your project's requirements, create a .svgrrc file and specify the desired options. You can explore all available configuration options in the [SVGR Options](https://react-svgr.com/docs/options/) documentation. Here's an example of a configuration file:

```bash
{
  "dimensions": true,
  "icon": true,
  "svgo": true,
  "svgProps": {
    "role": "img",
    "width": "32px",
    "height": "32px"
  },
  "titleProp": true
}
```

## Transform SVGs into React Components

To convert SVG files into React components, run the following script within your project directory:

```bash
npx @svgr/cli src/svg --out-dir src/components/js
npx @svgr/cli src/svg --out-dir src/components/tsx --typescript
```

## Transform SVGs into React Components with SVGR Custom Template

You can further personalize your React components by using SVGR Custom Templates. This allows you to create React components that match your project's unique style and requirements. Here's how to use a custom template:

```bash
npx @svgr/cli src/svg --out-dir src/components/js --template src/template.js
npx @svgr/cli src/svg --out-dir src/components/tsx --template src/template.js --typescript
```

By specifying the --template option in the CLI, you can override the default template for custom rendering.

## Learn More

For more advanced usage and customization options, explore the following SVGR documentation:

- [SVGR Options](https://react-svgr.com/docs/options/): Discover the various configuration options available for SVGR.
- [SVGR Custom Template](https://react-svgr.com/docs/custom-templates/): Learn how to create custom templates for generating React components from SVGs.
