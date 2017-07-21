import Vue from "vue";
import Router from "vue-router";

import Login from "../components/authentication/Login.vue";
import Register from "../components/authentication/Register.vue";

import Platform from "../components/Platform.vue";
import ServiceProfiles from "../components/dashboard/service-profiles/ServiceProfiles.vue";
import ServiceProfileOverview from "../components/dashboard/service-profiles/ServiceProfileOverview.vue";
import ServiceProfileForm from "../components/dashboard/service-profiles/ServiceProfileForm.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {isPublic: true},
        }, {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {isPublic: true},
        },
        {
            path: '',
            name: 'private',
            component: Platform,
            redirect: {name: 'ServiceProfiles'},
            meta: {isPrivate: true},
            children: [
                {
                    path: '/service-profiles',
                    name: 'ServiceProfiles',
                    component: ServiceProfiles,
                    redirect: {name: 'ServiceProfileOverview'},
                    children: [
                        {
                            path: 'overview',
                            name: 'ServiceProfileOverview',
                            component: ServiceProfileOverview,
                        },
                        {
                            path: 'create',
                            name: 'ServiceProfileForm',
                            component: ServiceProfileForm,
                        },
                    ],
                },
            ]
        },

    ]
})
