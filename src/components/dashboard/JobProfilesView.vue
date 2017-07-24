<template>
    <div>
        <h1 class="col-xs-12 col-sm-4 col-md-4 col-lg-4">Job Profiles</h1>
        <div class="pull-right col-xs-12 col-sm-4 col-md-6 col-lg-6 app-top-buttons">
            <router-link :to="{name: 'JobProfileCreate'}" tag="button" class="btn btn-success pull-right"><span
                    class="glyphicon glyphicon-plus "></span> Add Job Profile
            </router-link>
        </div>
        <div class="clearfix"></div>
        <br>
        <app-job-profile
                v-for="jobProfile in jobProfiles"
                :jobProfile="jobProfile"
                :key="jobProfile.id">
        </app-job-profile>
        <div class="">
            <div v-if="!hasJobProfiles" class="app-info-box alert alert-info text-center">
                <p>You currently don't have any job profiles in your account</p>
                <br>
                <router-link :to="{name: 'JobProfileCreate`'}" tag="button" class="btn btn-primary"><span
                        class="glyphicon glyphicon-plus "></span> Add Job Profile
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import JobProfile from "./JobProfile.vue";

    export default {
        data(){
            return {
                jobProfiles: [
                    {
                        id: 1,
                        title: 'Truck Driver',
                        description: 'I want a good truck driver',
                        compensation: '$100/hour',
                        clothing: 'Extra warm',
                        location: 'Amsterdam',
                    }, {
                        id: 2,
                        title: 'Taxi Driver',
                        description: 'I want a good taxi driver',
                        compensation: '$59/hour',
                        clothing: 'suit',
                        location: 'Utrecht',
                    }, {
                        id: 3,
                        title: 'Racetrack Coureur',
                        description: 'I want to have Max Verstappen type driver',
                        compensation: '$3000/hour',
                        clothing: 'Secure suit',
                        location: 'Zandvoort',
                    }, {
                        id: 4,
                        title: 'Soccer Mom',
                        description: 'A mom with 4 kids in a minivan',
                        compensation: '$15/hour',
                        clothing: 'Mom clothing',
                        location: 'Gouda',
                    },
                ],
            };
        },
        components: {
            appJobProfile: JobProfile,
        },
        computed: {
            hasJobProfiles(){
                return this.jobProfiles.length > 0;
            }
        },
    }
</script>

<style scoped>
    .app-info-box {
        padding: 20px;
    }
</style>
