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


