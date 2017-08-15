<template>
    <div>
        <h1 class="pull-left">Dienstprofielen</h1>
        <div class="pull-right app-top-buttons">
            <router-link :to="{name: 'JobProfileCreate'}" tag="button" class="btn btn-primary pull-right"><span
                    class="glyphicon glyphicon-plus "></span> Dienstprofiel aanmaken
            </router-link>
        </div>
        <div class="clearfix"></div>
        <br>
        <app-job-profile
                v-for="jobProfile in jobProfiles"
                :jobProfile="jobProfile"
                :key="jobProfile.id">
        </app-job-profile>
        <div v-if="!hasJobProfiles && loaded" class="app-info-box alert alert-warning text-center">
            <p>Je hebt nog geen dienstprofielen aangemaakt</p>
        </div>
        <div v-if="hasJobProfiles" class="text-center app-bordered">
            <router-link :to="{name: 'JobProfileCreate'}" tag="button" class="btn btn-primary"><span
                    class="glyphicon glyphicon-plus "></span> Dienstprofiel aanmaken
            </router-link>
        </div>
    </div>
</template>

<script>
    import JobProfile from "./JobProfile.vue";

    export default {
        data(){
            return {
                jobProfiles: [],
                loaded: false,
            };
        },
        methods: {
            getJobProfiles(){
                this.$http.get('jobProfiles').then(response => {
                    return response.json();
                }).then(data => {
                    this.jobProfiles = data.jobProfiles;
                    this.loaded = true;
                });
            }
        },
        components: {
            appJobProfile: JobProfile,
        },
        computed: {
            hasJobProfiles(){
                return this.jobProfiles.length > 0;
            }
        },
        created(){
            this.getJobProfiles();
        },
    }
</script>

<style scoped>
    .app-info-box {
        padding: 20px;
    }

    .app-bordered {
        padding: 30px;
        border: 3px dotted #c7c7c7;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
    }
</style>
