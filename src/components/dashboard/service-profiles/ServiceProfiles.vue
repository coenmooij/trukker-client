<template>
    <div class="col-xs-12">
        <h1>Service Profiles</h1>
        <hr>
        <ul v-if="hasServiceProfiles">
            <app-service-profile
                    v-for="serviceProfile in serviceProfiles"
                    :serviceProfile="serviceProfile"
                    :key="serviceProfile">
            </app-service-profile>
        </ul>
        <div class="">
            <div v-if="!hasServiceProfiles" class="app-info-box alert alert-info text-center">
                <p>You currently don't have any service profiles in your account</p>
                <br>
                <router-link :to="{name: 'ServiceProfileForm'}" tag="button" class="btn btn-primary"><span
                        class="glyphicon glyphicon-plus "></span> Add Service Profile
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceProfile from "./ServiceProfile.vue";

    export default {
        data(){
            return {
                serviceProfiles: [], //[1, 2, 3, 4, 5],
            };
        },
        components: {
            appServiceProfile: ServiceProfile,
        },
        computed: {
            hasServiceProfiles(){
                return this.serviceProfiles.length > 0;
            }
        },
    }
</script>

<style scoped>
    .app-info-box {
        padding: 20px;
    }
</style>