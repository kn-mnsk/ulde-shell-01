# UldeShell

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Application

A concrete, ready‑to‑build Angular v21 standalone project structure taht can be  created immediately:

- a clean folder structure
- the minimal starter files
- the routing setup
- the engine skeleton
- the playground scaffold

Everything will be incremental and extensible, exactly the way you like to build systems.

## 1. Project Structure (Angular v21, standalone, plugin‑ready)
Here’s the structure you should create right after  npx @angular/cli@21.2.0 new ulde-shell --directory documentation/ulde-shell-01 --standalone true --ssr true --style scss --zoneless true --ai-config gemini --routing true --strict true:

```
src/
  app/
    app.component.ts
    app.routes.ts

    features/
      home/
        home.component.ts
        home.routes.ts

      playground/
        playground.component.ts
        playground.routes.ts

    engine/
      plugin-registry/
        plugin.types.ts
        plugin-registry.service.ts

      lifecycle/
        lifecycle-events.ts
        lifecycle.service.ts

      artifacts/
        artifact.types.ts
        artifact-factory.service.ts

      overlays/
        overlay.types.ts
        overlay-host.component.ts
        overlay.service.ts
      plugins/
        index.ts        ←  plugin loader
        observe/
          index.ts      ← plugin entry point
          observe.plugin.ts
          overlay.ts
          observe.types.ts
          observe.style.scss
```

This is intentionally lean — just enough structure to grow into the Unified Lifecycle‑Aware Documentation Engine (ULDE).

## 2. Root Rouring: _app.routes.ts_

This is the only routing file you must have.

## 3. Home Feature — _home.ts + home.routes.ts_

## 4. Playground Feature — your experimental lab

_playground.ts_
_playground.routes.ts_

## 5. Engine Skeleton — minimal but extensible

This is where your architecture will grow. For now, we create the contracts and stubs.

1. _engine/plugin-registry/plugin.types.ts_
2. _engine/plugin-registry/plugin-registry.service.ts_
3. _engine/lifecycle/lifecycle-events.ts_
4. _engine/lifecycle/lifecycle-events.ts & engine/plugin-registry/plugin-registry.service.ts_
5. _engine/artifacts/artifact.types.ts & engine/artifacts/artifact-factory.service.ts_
6. _engine/overlays/overlay.types.ts & engine/overlays/overlay-host.ts & engine/overlays/overlay.service.ts_


So far:

- a clean Angular v21 standalone project
- feature‑local routing
- a playground for experiments
- a plugin registry
- lifecycle event stubs
- artifact factory stubs
- overlay infrastructure

This is the perfect foundation for the ULDE architecture.


## Next Steps:

The sequence 1 → 2 → 3 → 4 → 5 is a straight, convergent path to your plugin‑extensible documentation system.
Very roughly:

1. First real plugin:  

You prove the plugin contract + registry are real, not theoretical.

2. Lifecycle Fusion Timeline artifact:  

You prove the system can produce rich, structured artifacts from plugins.

3. Debug Overlay 2.0:  

You make the system observable and teachable—core to your philosophy.

4. Plugin scaffolding CLI:  

You make the system contributor‑friendly and scalable.

5. Docs feature (UI over artifacts):  

You turn the engine into a full documentation product, not just an internal mechanism.


### 1. irst real plugin

#### 📁 The correct structure for the first real plugin

Here is the exact folder structure you should create:
```
src/
  app/
    engine/
      plugin-registry/
      lifecycle/
      artifacts/
      overlays/

      plugins/
        observe/
          index.ts
          observe.plugin.ts
          overlay.ts
          observe.types.ts
          observe.style.scss

```
This aligns perfectly with:

- your Angular project
- the ULDE engine skeleton
- the plugin registry you already scaffolded

#### 🧠 Why plugins belong under engine/plugins/

Because in your architecture:

- engine/ is the ULDE runtime
- plugin-registry/ is the loader
- plugins/ is the natural extension point
- Angular’s build system will bundle everything cleanly
- You avoid cross‑package complexity until you need it

This is the simplest, cleanest, most scalable place for plugins right now.

Later, when ULDE matures, you can move to:

- external plugin packages
- npm‑published plugins
- dynamic plugin loading

But not yet.
Right now, keep everything inside the engine.


## 1. Define the plugin contract

_src/app/engine/plugin-registry/plugin.types.ts_

This is the minimal contract needed for ULDE to load and run plugins. and This matches the architecture we’ve been building.

## 2. Implement the plugin registry service

_src/app/engine/plugin-registry/plugin-registry.service.ts_

This is the heart of ULDE’s plugin system.

It:

- stores plugins
- registers them
- activates them
- forwards lifecycle events
- disposes them

## 3. Wire the registry into the lifecycle

_src/app/engine/lifecycle/lifecycle.service.ts_

You likely already have a stub — now we make it emit real frame events.

This gives ULDE a real frame loop.

## 4. Add plugin auto‑loading

_src/app/engine/plugins/index.ts_

This is the simplest possible plugin discovery mechanism.

Later, you can:

- load dynamically
- load from config
- load from npm packages

But for now, this is perfect.

## 5. Bootstrap ULDE in the root component 

_src/app/app.ts_

This is the moment ULDE becomes real:

- registry initializes
- plugins register
- plugins activate
- lifecycle starts firing
- overlays appear

## 6. Your first plugin now loads automatically

If you drop this plugin into:
```
src/app/engine/plugins/observe/
```
It will:

- register
- activate
- render its overlay
- update every frame
- No extra wiring needed.

__You now have a real, working ULDE plugin system
This is not theoretical anymore — it’s a functioning, Angular‑integrated, lifecycle‑driven plugin architecture.__

You can now:

- build the Observability Plugin
- build the Lifecycle Fusion Timeline
- build the Debug Overlay 2.0
- build artifact injectors
- build contributor tools

Everything is now unlocked.
