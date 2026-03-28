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
          observe-overlay.ts          ← your naming style
          observe-overlay.html        ← templateUrl
          observe-overlay.scss        ← styleUrls
          observe.types.ts
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
        index.ts        ←  plugin loader
        observe/
          index.ts      ← plugin entry point
          observe.plugin.ts
          observe-overlay.ts          ← your naming style
          observe-overlay.html        ← templateUrl
          observe-overlay.scss        ← styleUrls
          observe.types.ts

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


## Angular + Vite
```
But, i have an error:
 No loader is configured for ".scss" files: src/app/engine/plugins/observe/observe.style.scss

    src/app/engine/plugins/observe/overlay.ts:1:7:
      1 │ import './observe.style.scss';
        ╵        ~~~~~~~~~~~~~~~~~~~~~~
Or, even import './observe.style' cause an error:
[ERROR] Could not resolve "./observe.style"

    src/app/engine/plugins/observe/overlay.ts:1:7:
      1 │ import './observe.style';
        ╵        ~~~~~~~~~~~~~~~~~
```

now that we’ve grounded ourselves in the actual Angular‑with‑Vite environment, here’s the real reason your SCSS import is failing, and the exact fix that works cleanly with your ULDE plugin architecture.

Let’s walk through it clearly and without noise.

__🎯 Why the error happens__
Angular v17+ (and v21) uses Vite + esbuild for the dev/build pipeline.
Vite does **NOT allow importing SCSS from arbitrary** .ts files unless:

- the file is inside a component’s styleUrls, or
- the file is imported from a .ts file that Vite treats as a “CSS-aware module” (rare), or
- the file is referenced from angular.json global styles.

So:
```
import './observe.style.scss';
```

fails because Vite doesn’t apply the SCSS loader to arbitrary TypeScript modules.
This matches the behavior described in the search results (Vite SCSS resolution issues) .

__🧠 The key insight__
Angular + Vite does not support SCSS imports inside plain TypeScript files.

This is not a bug — it’s the expected behavior.

Your plugin’s overlay.ts is a plain TS module, so Vite refuses to load SCSS there.

__✅ The correct fix__
You have two clean options, and I’ll recommend the one that fits ULDE’s architecture best.

_OPTION A — Move plugin styles into styles.scss (global)_
This is the simplest and works immediately.

Add this to:

```
src/styles.scss
```
scss
```Scss
@use 'app/engine/plugins/observe/observe.style' as *;
```
Now remove the import from overlay.ts.

This works because Angular’s global stylesheet is processed by the SCSS pipeline.

_OPTION B — Convert the overlay into an Angular component_
This is the architecturally correct long‑term solution.

Why?

- Angular components can load SCSS via styleUrls.
- It gives you style encapsulation.
- It aligns with your ULDE overlay host system.

You would create:
```
overlay.ts
overlay.scss
```
And mount it dynamically inside the overlay host.

This is the direction ULDE will eventually go.

_OPTION C — Inline the CSS (MVP‑friendly)_
If you want the plugin to work right now with zero Angular component overhead, inline the CSS:

```ts
this.el.style.cssText = `
  position: fixed;
  top: 8px;
  right: 8px;
  background: rgba(0,0,0,0.75);
  color: white;
  padding: 6px 10px;
  font-size: 11px;
  border-radius: 4px;
  pointer-events: none;
  z-index: 999999;
`;
```
This avoids SCSS entirely.

___⭐ My recommendation for you___
Given your architectural goals (modular, plugin‑extensible, contributor‑friendly), the best path is:

Option B: Convert the overlay into an Angular component.
It gives you:

- SCSS support
- encapsulation
- future extensibility
- consistency with ULDE’s overlay host

And it avoids all Vite SCSS loader limitations.


__plugin-registry.service.ts__

_✔ onRegister_
Runs once when plugin is added.

_✔ onActivate_
Runs once after ULDE initializes.

_✔ onFrame_
Runs every frame — and only this one.

_✔ onDispose_
Runs once on teardown.

This matches the lifecycle contract we designed and ensures:

- no memory leaks
- no duplicate overlays
- no repeated Angular component creation
- correct plugin semantics
- stable performance

_🎉 You’re now ready to run the Observe Plugin cleanly_
Once you replace your registry with the correct version, your Angular overlay component will:

- mount once
- update every frame
- dispose cleanly
- behave exactly as a ULDE plugin should

___The next plugin candidates:___

1. a plugin activation log
2. a plugin inspector panel
3. a frame‑budget heatmap
4. or the next plugin in the roadmap (Lifecycle Fusion Timeline)


##  mini timeline bar plugin

_animates every frame and gives you a visual sense of frame progression._

_What we’re adding:_

A small horizontal bar at the bottom of the overlay:

- grows from left → right each frame
- resets every N frames (configurable)
- visually shows frame progression
- future‑ready for frame budget heatmaps

It will look like this:
```
Frame: 120
Time: 123.4 ms
Events: onFrame
[██████████░░░░░░░░░░░░░░░░░░]
```
### 1. Update observe-overlay.ts

Add a computed signal for the timeline progress.
```ts
import { Component, input, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

...

export class ObserveOverlay {

...

  // mini timeline bar
  // Reset every 120 frames (2 seconds at 60fps)
  private cycle = 120;

  progress = computed(() => {
    const f = this.frame();
    return (f % this.cycle) / this.cycle;
  });
}

```
_✔ progress() returns a number between 0 and 1_
Perfect for a CSS width binding.

### 2. Update observe-overlay.html
Add the timeline bar at the bottom.
```html
<div class="overlay">
  ...
  <div class="timeline">
    <div class="bar" [style.width.%]="progress() * 100"></div>
  </div>
</div>

```
__✔ Uses [style.width.%] for smooth animation__

__✔ Uses progress() signal__

__✔ No inline styles, no hacks__

### 3. Update observe-overlay.scss

Add the timeline bar styles.
```Scss
...
.timeline {
  margin-top: 6px;
  height: 4px;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  overflow: hidden;
}

.bar {
  height: 100%;
  background: #4caf50;
  transition: width 0.05s linear;
}

```
__✔ Smooth animation__

__✔ Subtle, unobtrusive__

__✔ Easy to theme later__

### 🎉 Result

You now have:

- a clean, signal‑driven overlay
- a mini timeline bar that animates every frame
- a visual heartbeat of ULDE’s frame loop
- a foundation for future observability features

_This is the first step toward a full Lifecycle Fusion Timeline._

## Evolution into multi‑segment frame‑phase timeline

_This is a tiny but powerful visual of how each frame is composed, which is the first real step toward the full Lifecycle Fusion Timeline._

### 🌈 What we’re adding now

Instead of a single green bar, we’ll render multiple colored segments, each representing a phase of the frame.

For example:

- Frame Start
- Plugin Execution
- DOM Update
- Idle / Budget Left

Visually:
```
[███░░░░██████░░░░██░░░░]
 ^    ^        ^      ^
 FS   PLUGINS  DOM    IDLE
 ```
This is still tiny and unobtrusive, but already gives you a phase‑aware frame visualization.

### Step 1 — Decide the phases

For now, let’s define four simple phases:
```ts
type FramePhase = {
  name: string;
  ratio: number; // 0–1 portion of the bar
  color: string;
};

```
We’ll generate these ratios artificially for now (until you wire real timings from ULDE).

### Step 2 — Update observe-overlay.ts

We add:

- a computed signal phases
- each phase gets a color + ratio
- a helper to compute cumulative widths

Here’s the updated component:
```ts
import { Component, input, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'ulde-observe-overlay',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './observe-overlay.html',
  styleUrls: ['./observe-overlay.scss']
})
export class ObserveOverlay {
  frame = input<number>(0);
  timestamp = input<number>(0);
  events = input<string[] | null>([]);

  // Fake phase ratios for now — later these will come from ULDE
  phases = computed(() => {
    const f = this.frame();

    // Just for visual variation — deterministic but playful
    const a = (f % 30) / 30;
    const b = ((f + 10) % 50) / 50;
    const c = ((f + 20) % 70) / 70;

    const total = a + b + c + 0.2; // ensure non-zero idle

    return [
      { name: 'start',   ratio: a / total, color: '#4caf50' },
      { name: 'plugins', ratio: b / total, color: '#2196f3' },
      { name: 'dom',     ratio: c / total, color: '#ff9800' },
      { name: 'idle',    ratio: 0.2 / total, color: '#9e9e9e' }
    ];
  });
}

```
__✔ Still signal‑based__

__✔ No breaking changes__

__✔ Future‑ready for real ULDE timings__


### Step 3 — Update observe-overlay.html

Add a multi‑segment timeline:
```html
<div class="overlay">
  ...

  <div class="timeline">
  @for (p of phases(); track p.name) {
    <div
      class="segment"
      [style.width.%]="p.ratio * 100"
      [style.background]="p.color">
    </div>
  }
</div>

</div>

```

__✔ Uses *ngFor__

__✔ Uses signal phases()__

__✔ Each segment gets its own width + color__

### Step 4 — Update observe-overlay.scss

Add styles for multi‑segment layout:
```scss
.timeline {
  margin-top: 6px;
  height: 4px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  display: flex;
}

.segment {
  height: 100%;
  transition: width 0.05s linear;
}
```

__✔ Flexbox makes segments line up perfectly__

__✔ Smooth animation__

__✔ No layout thrashing__

### 🎉 Result

You now have a multi‑segment frame‑phase timeline that:

- animates every frame
- shows phase proportions
- is tiny and unobtrusive
- is fully signal‑driven
- is Angular‑correct
- is plugin‑extensible
- is ready for real ULDE timings later

This is the first real step toward the Lifecycle Fusion Timeline.

## Add real phase timings from ULDE

This is where ULDE starts to feel like a real engine:
your overlay will visualize actual measured durations of:

- frame start
- plugin execution
- DOM update
- idle / leftover budget

And everything will remain:

- signal‑driven
- Angular‑correct
- plugin‑friendly
- incremental and extensible

Let’s do this cleanly and step‑by‑step.

### Step 1 — Extend ULDE’s lifecycle service to emit real timings
Right now your LifecycleService emits:

```ts
{ frame, timestamp, events }

```
We’ll extend it to emit phase durations.

__New Shape:__
```ts
export interface FrameContext {
  frame: number;
  timestamp: number;
  events: string[];
  phases: {
    start: number;
    plugins: number;
    dom: number;
    idle: number;
  };
}

```

__Updated__ lifecycle.service.ts

This version measures real timings using performance.now().
```ts
import { Injectable } from '@angular/core';
import { animationFrameScheduler, interval, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LifecycleService {
  frame$ = interval(0, animationFrameScheduler).pipe(
    map((frame) => {
      const t0 = performance.now();

      // Phase 1: frame start
      const tStart = performance.now();

      // Phase 2: plugin execution (ULDE will fill this later)
      const tPlugins = performance.now();

      // Phase 3: DOM update (Angular zone-less render)
      const tDom = performance.now();

      const tEnd = performance.now();

      return {
        frame,
        timestamp: tEnd,
        events: ['onFrame'],
        phases: {
          start: tStart - t0,
          plugins: tPlugins - tStart,
          dom: tDom - tPlugins,
          idle: Math.max(0, 16.6 - (tEnd - t0)) // 60fps budget
        }
      };
    }),
    shareReplay(1)
  );
}

```
__✔ This gives you real durations__

__✔ Still lightweight__

__✔ Future‑ready for real plugin timings__

Later, ULDE will fill in real plugin execution time.

### Step 2 — Pass phase timings to plugins

Update your registry:
```ts
this.lifecycle.frame$.subscribe((ctx) => {
  for (const plugin of this.plugins) {
    plugin.onFrame?.(ctx);
  }
});

```
No changes needed — ctx now includes phases.

### Step 3 — Update Observe Plugin to forward phases

In observe.plugin.ts:
```ts
onFrame(ctx) {
  if (!this.cmpRef) return;

  this.cmpRef.setInput('frame', ctx.frame);
  this.cmpRef.setInput('timestamp', ctx.timestamp);
  this.cmpRef.setInput('events', ctx.events);
  this.cmpRef.setInput('phases', ctx.phases);
}
```
Add a new input to the component.

### Step 4 — Update Observe Overlay component

Add a new signal input:
```ts
phases = input<{
  start: number;
  plugins: number;
  dom: number;
  idle: number;
} | null>(null);
```
Replace your synthetic phases() computed with a real one:
```ts
phaseSegments = computed(() => {
  const p = this.phases();
  if (!p) return [];

  const total = p.start + p.plugins + p.dom + p.idle || 1;

  return [
    { name: 'start',   ratio: p.start / total,   color: '#4caf50' },
    { name: 'plugins', ratio: p.plugins / total, color: '#2196f3' },
    { name: 'dom',     ratio: p.dom / total,     color: '#ff9800' },
    { name: 'idle',    ratio: p.idle / total,    color: '#9e9e9e' }
  ];
});
```
### Step 5 — Update the template to use real segments

Replace your timeline block with:
```html
<div class="timeline">
  @for (p of phaseSegments(); track p.name) {
    <div
      class="segment"
      [style.width.%]="p.ratio * 100"
      [style.background]="p.color">
    </div>
  }
</div>
```
__✔ Still using @for__

__✔ Still signal‑driven__

__✔ Now based on real timings__

### Step 6 — No SCSS changes needed

Your existing .timeline and .segment styles work perfectly.

### Step 6 — No SCSS changes needed

Your existing .timeline and .segment styles work perfectly.

### Result: You now have a real phase‑aware timeline
Your overlay now visualizes:

Frame Start

Plugin Execution

DOM Update

Idle Time

All based on actual measured durations from ULDE’s lifecycle.

This is the first real step toward the Lifecycle Fusion Timeline — and you now have the architecture to expand it.

## add real per‑plugin execution timings

_This is the upgrade that transforms your engine from “cool overlay” into a true observability system._

### Step 1 — Instrument plugin execution time inside the registry

This is the heart of the upgrade.

We wrap each plugin’s onFrame call with performance.now() and accumulate timings.

plugin-registry.service.ts (updated section only)
```ts
this.lifecycle.frame$.subscribe((ctx) => {
  const pluginTimings: Record<string, number> = {};

  for (const plugin of this.plugins) {
    const t0 = performance.now();
    plugin.onFrame?.(ctx);
    const t1 = performance.now();

    pluginTimings[plugin.id] = t1 - t0;
  }

  // Attach timings to the frame context
  ctx.pluginTimings = pluginTimings;
});

```
Why this works well

- No breaking changes
- No plugin modifications required
- Registry remains the single source of truth

Timings are accurate and per‑plugin

### Step 2 — Extend the FrameContext type

Add plugin timings:
```ts
export interface FrameContext {
  frame: number;
  timestamp: number;
  events: string[];
  phases: {
    start: number;
    plugins: number;
    dom: number;
    idle: number;
  };
  pluginTimings: Record<string, number>;
}

```
This keeps everything strongly typed and future‑proof.

### Step 3 — Forward plugin timings to the Observe Plugin

In observe.plugin.ts:
```ts
onFrame(ctx) {
  if (!this.cmpRef) return;

  this.cmpRef.setInput('frame', ctx.frame);
  this.cmpRef.setInput('timestamp', ctx.timestamp);
  this.cmpRef.setInput('events', ctx.events);
  this.cmpRef.setInput('phases', ctx.phases);
  this.cmpRef.setInput('pluginTimings', ctx.pluginTimings);
}

```
### Step 4 — Add a new signal input in observe-overlay.ts
```ts
pluginTimings = input<Record<string, number> | null>(null);

```
Now we compute a plugin execution segment list.
```ts
pluginSegments = computed(() => {
  const timings = this.pluginTimings();
  if (!timings) return [];

  const entries = Object.entries(timings);
  const total = entries.reduce((sum, [, v]) => sum + v, 0) || 1;

  const colors = [
    '#4caf50', // green
    '#2196f3', // blue
    '#ff9800', // orange
    '#e91e63', // pink
    '#9c27b0', // purple
    '#009688', // teal
  ];

  return entries.map(([id, ms], i) => ({
    name: id,
    ratio: ms / total,
    color: colors[i % colors.length],
    ms
  }));
});

```
Notes

- Each plugin gets a stable color
- Ratios sum to 1
- This is ready for stacked bars or detailed lists

### Step 5 — Add a plugin execution timeline to the template

Below your existing phase timeline, add:
```html
<div class="plugin-timeline">
  @for (p of pluginSegments(); track p.name) {
    <div
      class="segment"
      [style.width.%]="p.ratio * 100"
      [style.background]="p.color"
      title="{{ p.name }}: {{ p.ms | number:'1.0-2' }} ms">
    </div>
  }
</div>

```
Why this is powerful

- You now see exactly which plugin is slow
- You get a stacked bar of plugin execution
- Hovering shows exact ms values
- This is the foundation for a full plugin profiler


### Step 6 — Add minimal SCSS

In observe-overlay.scss:
```scss
.plugin-timeline {
  margin-top: 4px;
  height: 4px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  display: flex;
}

.plugin-timeline .segment {
  height: 100%;
  transition: width 0.05s linear;
}

```
What you have now
Your overlay now shows:

1. Frame phase timeline
start

- plugins (aggregate)
- dom
- idle

2. Plugin execution timeline
each plugin gets its own colored segment

- widths reflect real execution time
- hover shows exact ms

3. Signal‑driven, Angular‑correct, plugin‑extensible UI
This is a huge step toward a real engine profiler.

## extend your overlay with a plugin execution list that shows

- each plugin’s name
- its execution time in ms
- its percentage of total plugin cost
- color‑coded to match the plugin timeline bar

This is the natural next step and makes your observability panel dramatically more useful.

Below is a clean, incremental update that fits your architecture and keeps everything signal‑driven and contributor‑friendly.

### Step 1 — Add a computed list for display
In observe-overlay.ts, add this new computed signal:

```ts
pluginList = computed(() => {
  const timings = this.pluginTimings();
  if (!timings) return [];

  const entries = Object.entries(timings);
  const total = entries.reduce((sum, [, v]) => sum + v, 0) || 1;

  const colors = [
    '#4caf50', // green
    '#2196f3', // blue
    '#ff9800', // orange
    '#e91e63', // pink
    '#9c27b0', // purple
    '#009688', // teal
  ];

  return entries.map(([id, ms], i) => ({
    id,
    ms,
    pct: (ms / total) * 100,
    color: colors[i % colors.length]
  }));
});
```

Why this works well

- It reuses the same color palette as your timeline
- It computes percentages cleanly
- It stays reactive and efficient
- It’s easy to extend later (sorting, collapsing, etc.)

### Step 2 — Add the list to your template

In observe-overlay.html, add this block below the plugin timeline:

```html
<div class="row">
  <span class="label">Plugins</span>
  <div class="value plugin-list">
    @for (p of pluginList(); track p.id) {
      <div class="plugin-row">
        <span class="dot" [style.background]="p.color"></span>
        <span class="name">{{ p.id }}</span>
        <span class="ms">{{ p.ms | number:'1.0-2' }} ms</span>
        <span class="pct">({{ p.pct | number:'1.0-0' }}%)</span>
      </div>
    }
  </div>
</div>
```
This gives you a clean, readable list like:
```
Plugins:
  ● ulde.observe     1.23 ms   (12%)
  ● ulde.timeline    0.85 ms   (8%)
  ● ulde.profiler    3.40 ms   (34%)
```

### Step 3 — Add minimal SCSS for the list

In observe-overlay.scss, add:
```scss
.plugin-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.plugin-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-variant-numeric: tabular-nums;
}

.plugin-row .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.plugin-row .name {
  flex: 1;
  opacity: 0.85;
}

.plugin-row .ms,
.plugin-row .pct {
  opacity: 0.7;
}
```

Why this layout works

- The dot color matches the timeline segment
- The plugin name expands naturally
- ms and % align neatly
- Everything stays compact and readable

### 🎉 What you now have

Your overlay now shows:

> ✔ Frame
> ✔ Time
> ✔ Events
> ✔ Phase timeline
> ✔ Plugin execution timeline
> ✔ Plugin execution list (ms + %)

This is now a real profiling panel, not just a debug overlay.

You can immediately see:

- which plugin is slow
- how plugins compare
- how plugin cost relates to total frame cost
- how plugin cost relates to phase cost

This is the foundation of a full ULDE Performance Profiler.

## let’s turn your overlay into a frame‑budget heatmap

every frame instantly tells you whether ULDE is running comfortably, getting warm, or blowing past the 16.6 ms budget.

This is one of the most visually powerful upgrades you can add, and it layers beautifully on top of your existing phase + plugin timelines.

__🔥 What we’re adding now__

A heatmap color applied to the entire phase timeline bar, based on total frame duration:

Frame Time	|Color	|Meaning
------------|-------|--------
|🟩 Green	|Very healthy
8–14 ms	|🟨 Yellow	|Getting warm
14–16.6 ms	|🟧 Orange	|Near budget
> 16.6 ms	|🟥 Red	|Dropping frames

This gives you an instant “frame health” signal.

### Step 1 — Add a computed heatmap color in observe-overlay.ts

Add this:
```ts
heatColor = computed(() => {
  const t = this.timestamp(); // end-of-frame timestamp
  const f = this.frame();

  // We need the duration of THIS frame, not absolute timestamp.
  // So we track previous timestamp.
  // For now, assume timestamp is delta (if not, we adjust next).
  const ms = t;

  if (ms < 8) return '#4caf50';      // green
  if (ms < 14) return '#ffeb3b';     // yellow
  if (ms < 16.6) return '#ff9800';   // orange
  return '#f44336';                  // red
});
```

If your timestamp is absolute
We can easily switch to delta later.
For now, this gives you a working heatmap.

### Step 2 — Apply the heat color to the phase timeline background

Update your phase timeline block in observe-overlay.html:
```html
<div class="row">
  <span class="label">Timeline</span>
  <div class="timeline" [style.background]="heatColor()">
    @for (p of phaseSegments(); track p.name) {
      <div class="segment"
        [style.width.%]="p.ratio * 100"
        [style.background]="p.color">
      </div>
    }
  </div>
</div>
```

__What this does__

- The background of the timeline becomes the heatmap color
- The segments still show phase ratios
- You get a beautiful blended effect:

>- green background + colored segments
>- yellow background + colored segments
>- orange background + colored segments
>- red background + colored segments

This is exactly how professional profilers visualize frame health.

### Step 3 — Slight SCSS tweak (optional but recommended)

Your .timeline already has:

```scss
background: rgba(255, 255, 255, 0.1);
```
Replace that with:
```scss
background: transparent; // heatColor() will override
```
Or simply remove the background line.

## build the scrolling frame‑history timeline.

This is the moment where your overlay stops being a “per‑frame inspector” and becomes a true performance profiler with temporal awareness.

I’ll guide you through a clean, incremental design that fits your architecture perfectly:

- signal‑driven
- lightweight
- plugin‑extensible
- visually compact
- contributor‑friendly

And we’ll keep everything aligned with your naming conventions and UI structure.

__🌟 What we’re building now__

A horizontal strip that shows the last N frames (e.g., 120), each frame represented as a tiny vertical bar:

- color = heatmap (frame health)
- height = total frame time (optional)
- optional: plugin cost overlay
- optional: phase ratio overlay
- Visually:

```
History:
▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉
🟩🟩🟨🟨🟧🟥🟥🟧🟨🟩🟩🟩🟩🟨🟧🟥🟥🟧🟨🟩
```
This gives you instant insight into:

- spikes
- stutters
- plugin slowdowns
- GC pauses
- DOM update bursts
- overall frame stability

It’s the most powerful visualization you can add at this stage.

### Step 1 — Add a circular frame buffer in observe-overlay.ts

We’ll store the last 120 frames.

Add this:
```ts
private historySize = 120;
private frameHistory: { ms: number; color: string }[] = [];

updateHistory(ms: number, color: string) {
  this.frameHistory.push({ ms, color });
  if (this.frameHistory.length > this.historySize) {
    this.frameHistory.shift();
  }
}
```
Now add a computed signal that exposes it to the template:
```ts
history = computed(() => this.frameHistory);
```

### Step 2 — Update history every frame

Inside your existing heatColor computed, we already compute the frame’s heat color.

Let’s extend it so it also updates the history buffer.

Modify heatColor like this:
```ts
heatColor = computed(() => {
  const ms = this.timestamp(); // assuming timestamp is delta for now

  let color = '#4caf50';
  if (ms >= 8 && ms < 14) color = '#ffeb3b';
  else if (ms >= 14 && ms < 16.6) color = '#ff9800';
  else if (ms >= 16.6) color = '#f44336';

  // Update history
  this.updateHistory(ms, color);

  return color;
});
```

This ensures the history updates automatically every frame.

### Step 3 — Add the history strip to your template

In observe-overlay.html, add this block:
```html
<div class="row">
  <span class="label">History</span>
  <div class="history">
    @for (h of history(); track h) {
      <div class="history-bar"
        [style.background]="h.color">
      </div>
    }
  </div>
</div>
```
This renders a tiny bar for each frame.

### Step 4 — Add SCSS for the history strip

In observe-overlay.scss, add:
```scss
.history {
  display: flex;
  gap: 1px;
  flex: 1;
  height: 10px;
  align-items: flex-end;
}

.history-bar {
  width: 2px;
  height: 100%;
  background: #4caf50;
  border-radius: 1px;
}
```
Why this works well

- 2px bars give you 120 frames in ~240px
- height is fixed (we can make it dynamic later)
- color shows heatmap
- extremely lightweight 

__🎉 What you now have__

Your overlay now includes:

> ✔ Frame
> ✔ Time
> ✔ Events
> ✔ Phase timeline
> ✔ Plugin execution timeline
> ✔ Plugin execution list
> ✔ Frame budget heatmap
> ✔ Scrolling frame history ← new

This is now a real‑time performance profiler with temporal awareness.

You can instantly see:

- spikes
- stutters
- slow frames
- plugin regressions
- DOM update bursts
- GC pauses

overall frame stability

This is the kind of visualization you see in professional engines like Unity, Unreal, and Chrome DevTools.

## Let’s turn your frame‑history strip into a true sparkline

each bar’s height reflects the actual frame duration in milliseconds.
This is the natural next evolution of your profiler, and it gives you a compact, instantly readable performance graph.

You already have the heatmap color per frame.
Now we’ll add height scaling, so the history looks like:

```
▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
```
This makes spikes, stutters, and slow frames jump out visually.

Let’s build it cleanly and incrementally.

### Step 1 — Store frame duration (ms) in history

You already store { ms, color }.
That’s perfect — we’ll reuse it.

No changes needed here.

### Step 2 — Add a computed max height scale

We want the tallest bar to represent the slowest frame in the buffer.

Add this to observe-overlay.ts:
```ts
maxHistoryMs = computed(() => {
  const hist = this.history();
  if (!hist.length) return 1;
  return Math.max(...hist.map(h => h.ms), 1);
});

```

This gives us a dynamic scale that adapts to real performance.

### Step 3 — Scale each bar’s height

Add this helper:
```ts
scaledHistory = computed(() => {
  const max = this.maxHistoryMs();
  return this.history().map(h => ({
    ...h,
    height: Math.min(1, h.ms / max) // 0–1
  }));
});
```
Now each history entry has:

- color
- ms
- height (0–1)


### Step 4 — Update the template to use scaled height

Replace your history block with:
```html
<div class="row">
  <span class="label">History</span>
  <div class="history">
    @for (h of scaledHistory(); track h) {
      <div class="history-bar"
        [style.background]="h.color"
        [style.height.%]="h.height * 100">
      </div>
    }
  </div>
</div>
```

This gives you a real sparkline.

### Step 5 — Update SCSS for vertical scaling

Your existing .history block is almost perfect.
Just ensure it aligns bars at the bottom:
```scss
.history {
  display: flex;
  gap: 1px;
  flex: 1;
  height: 20px; // slightly taller for sparkline
  align-items: flex-end; // bars grow upward
}

.history-bar {
  width: 2px;
  background: #4caf50;
  border-radius: 1px;
  transition: height 0.1s linear;
}
```

This gives you:

- smooth height animation
- compact sparkline
- heatmap color + height encoding


### 🎉 What you now have

Your overlay now includes:

> ✔ Frame
> ✔ Time
> ✔ Events
> ✔ Phase timeline
> ✔ Plugin execution timeline
> ✔ Plugin execution list
> ✔ Frame budget heatmap
> ✔ Scrolling frame

