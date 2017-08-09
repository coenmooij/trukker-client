// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import nl from "vee-validate/dist/locale/nl";
import VeeValidate, {Validator} from "vee-validate";
import store from "./store";

Vue.use(VueResource);

Validator.addLocale(nl);
Vue.use(VeeValidate, {locale: 'nl'});

Vue.http.options.root = "http://api.trukker.dev";

router.beforeEach((to, from, next) => {
    const loggedIn = store.isLoggedIn;
    if (to.matched.some(record => record.meta.isPublic)) {
        if (loggedIn) {
            next({name: 'Dashboard'});
        }
        next();
    } else if (to.matched.some(record => record.meta.isPrivate)) {
        if (!loggedIn) {
            next({name: 'Login'});
        }
        next();
    }
});

Vue.config.productionTip = false;

Vue.filter('capitalize', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
