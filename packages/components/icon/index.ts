import { withInstall } from "@yu_design/utils/with-install";
import _Icon from "./src/icon.vue";

const Icon = withInstall(_Icon);

export default Icon;
export * from "./src/icon";

declare module "vue" {
  export interface GlobalComponents {
    YIcon: typeof Icon;
  }
}
