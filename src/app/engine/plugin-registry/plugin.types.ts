import { EnvironmentInjector } from "@angular/core";

export interface UldePlugin {
  id: string;
  namespace: string;
  version: string;

  onRegister?(ctx: RegisterContext): void;
  onActivate?(ctx: ActivateContext): void;
  onFrame?(ctx: FrameContext): void;
  onDispose?(): void;
}

export interface RegisterContext {
  logger: { info(msg: string): void };
}

export interface ActivateContext {
  mountPoint: HTMLElement;
  injector: EnvironmentInjector;
}

export interface FrameContext {
  frame: number;
  timestamp: number;
  events: string[];
  phases: {
    start: number,
    plugins: number,
    dom: number,
    idle: number
  };
  pluginTimings: Record<string, number>;
}
