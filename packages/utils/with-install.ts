import { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export function withInstall<T>(compnent: T) {
  (compnent as SFCWithInstall<T>).install = function (app) {
    app.component(compnent.name, compnent);
  };
  return compnent;
}
