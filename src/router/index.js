import Vue from "vue";
import Router from "vue-router";

import Login from "../components/authentication/Login.vue";
import Register from "../components/authentication/Register.vue";

import Platform from "../components/Platform.vue";

import JobProfiles from "../components/dashboard/JobProfiles.vue";
import JobProfileCreate from "../components/dashboard/JobProfileCreate.vue";
import JobProfileDetails from '../components/dashboard/JobProfileDetails.vue';

import ShiftCreate from '../components/dashboard/ShiftCreate.vue';
import ShiftDetails from '../components/dashboard/ShiftDetails.vue';

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
            redirect: {name: 'JobProfiles'},
            meta: {isPrivate: true},
            children: [
                {
                    path: '/job-profiles',
                    name: 'JobProfiles',
                    component: JobProfiles,
                    children: [
                        {
                            path: 'create',
                            name: 'JobProfileCreate',
                            component: JobProfileCreate,
                        }, {
                            path: ':jobProfileId/details',
                            name: 'JobProfileDetails',
                            component: JobProfileDetails,
                            children: [
                                {
                                    path: 'create',
                                    name: 'ShiftCreate',
                                    component: ShiftCreate,
                                }, {
                                    path: ':shiftId/details',
                                    name: 'ShiftDetails',
                                    component: ShiftDetails,
                                }
                            ]
                        },
                    ],
                },
            ],
        },
    ]
});
