# Alpine JS Plugin Template

Starter structure for an Alpine JS plugin built with rolldown.

## Features

- Alpine-friendly plugin entry point
- rolldown-powered builds for ESM and CDN output
- Minified and unminified artifacts from the same source
- Simple npm release scripts for versioning and publishing

> ## Why Use This Template?
>
> Use this as the starting point for a small Alpine JS plugin package. It keeps the source surface minimal while still setting up the bundle, release, and packaging conventions you typically need once the plugin is ready to ship.

## Install

### CDN

```html
<script defer src="https://unpkg.com/alpinejs-plugin-template@latest/dist/cdn.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

**Important**: Alpine CDN plugins must be included _before_ Alpine to function properly. 

### Package

```sh
npm install alpinejs-plugin-template
```

```js
import Alpine from 'alpinejs';
import plugin from 'alpinejs-plugin-template';

Alpine.plugin(plugin({}));

Alpine.start();
```

> ## Building Plugin Options
>
> This template includes by default an options object as part of the plugin.
> `Alpine.plugin()` expects a function that accepts the Alpine instance, which the built-in plugin returns.
> If your plugin doesn't accept options, you can remove the extra layer like so:
>
> ```js
> export default myPlugin(Alpine) {
>   Alpine.directive("say-hi", ...);
> };
> ```
> ```js
> import myPlugin from 'alpine-my-plugin';
>
> Alpine.plugin(myPlugin)
> ```

## Example

Replace this section with your plugin-specific example once the implementation is in place.

## Options

Document plugin options here when the implementation defines them.

> ## Release
>
> Run one of the versioned release scripts to create the git tag, build, publish to npm, and push in one flow.
> 
> ```sh
> npm run release:patch
> npm run release:minor
> npm run release:major
> ```

> ## Template Notes
>
> - Build outputs are written to `dist/`.
> - The CDN build imports the plugin entry and auto-registers it on `alpine:init`. If you have default options for CDN builds, you will need to configure them there.
