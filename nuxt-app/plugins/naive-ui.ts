import { setup } from '@css-render/vue3-ssr';
import { defineNuxtPlugin } from '#app';
 
export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.server && nuxtApp.ssrContext) {
        const { collect } = setup(nuxtApp.vueApp || {});
        
        const originalRender = nuxtApp.ssrContext.renderMeta?.bind(nuxtApp.ssrContext) || (() => ({}));
        
        nuxtApp.ssrContext.renderMeta = () => {
            const result = originalRender();
            const headTags = result?.headTags || "";
            
            return {
                headTags: headTags + collect()
            };
        };
    }
});