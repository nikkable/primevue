<template>
    <DocSectionText v-bind="$attrs">
        <p>
            An unstyled theme is basically a global <i>pt</i> configuration so that it can be defined only once from a single location, still a particular component can override a global configuration since the <i>pt</i> props of a component and the
            global setting is merged with component having higher precedencee.
        </p>
    </DocSectionText>

    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { 
    pt: {
        button: {
            root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
            label: { class: 'text-white font-bold text-xl' },
            icon: { class: 'text-white text-2xl' }
        },
        panel: {
            header: { class: 'bg-primary border-primary' },
            content: { class: 'border-primary text-lg text-primary-700' },
            title: { class: 'bg-primary text-xl' },
            toggler: { class: 'bg-primary hover:bg-primary-reverse' }
        }
    } 
});`
            }
        };
    }
};
</script>
