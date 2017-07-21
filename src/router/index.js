import Vue from "vue";
import Router from "vue-router";

import Login from "../components/authentication/Login.vue";
import Register from "../components/authentication/Register.vue";

import Platform from "../components/Platform.vue";

import ServiceProfiles from "../components/dashboard/service-profiles/ServiceProfiles.vue";
import ServiceProfileOverview from "../components/dashboard/service-profiles/ServiceProfileOverview.vue";
import ServiceProfileForm from "../components/dashboard/service-profiles/ServiceProfileForm.vue";
import ServiceProfileView from '../components/dashboard/service-profiles/ServiceProfileView.vue';
import ServiceProfileEdit from '../components/dashboard/service-profiles/ServiceProfileEdit.vue';

import Jobs from '../components/dashboard/jobs/Jobs.vue';
import JobsOverview from '../components/dashboard/jobs/JobsOverview.vue';
import JobForm from '../components/dashboard/jobs/JobForm.vue';

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
                        }, {
                            path: 'create',
                            name: 'ServiceProfileForm',
                            component: ServiceProfileForm,
                        }, {
                            path: ':id/view',
                            name: 'ServiceProfileView',
                            component: ServiceProfileView,
                        }, {
                            path: ':id/edit',
                            name: 'ServiceProfileEdit',
                            component: ServiceProfileEdit,
                        }, {
                            path: ':id/jobs',
                            name: 'Jobs',
                            component: Jobs,
                            redirect: {name: 'JobsOverview'},
                            children: [
                                {
                                    path: 'view',
                                    name: 'JobsOverview',
                                    component: JobsOverview,
                                }, {
                                    path: 'create',
                                    name: 'JobForm',
                                    component: JobForm,
                                },
                            ],
                        },
                    ],
                },
            ]
        },
    ]
});
