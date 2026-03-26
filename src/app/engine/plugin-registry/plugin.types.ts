export interface UldePlugin {
  name: string;
  namespace: string;
  register(): void;
}
