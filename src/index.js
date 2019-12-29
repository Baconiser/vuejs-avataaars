import Avataaars from "./Avataaars.vue";
import assets from './assetsTypes';
export default {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("avataaars", Avataaars);
 }
};

export { assets };