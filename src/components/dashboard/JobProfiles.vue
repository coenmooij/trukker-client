<template>
        <component is="app-job-profiles-view" v-if="!hasChildren"></component>
        <router-view v-else></router-view>
</template>

<script>
    import JobProfilesView from './JobProfilesView.vue';

    export default {
        computed:{
            hasChildren(){
                return this.$route.name !== 'JobProfiles';
            },
        },
        components: {
            appJobProfilesView: JobProfilesView,
        },
    }
</script>
