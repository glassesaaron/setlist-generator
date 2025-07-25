# setlist-generator

## Preview a live app

https://glassesaaron.github.io/setlist-generator/

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the setlist generator in a new browser tab
npm run dev -- --open
```

Lint

`npm run lint`

Format

`npm run format`

## Building

To create a production version of the setlist generator:

```bash
npm run build
```

To build a version compatible with Github Pages:

```bash
npm run build && cp .svelte-kit/output/prerendered/pages/index.html ./
```

You can preview the production build with `npm run preview`

To deploy the setlist genrator, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
