// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter('capitalize', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
