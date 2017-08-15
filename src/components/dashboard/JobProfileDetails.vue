<template>
    <div v-if="!hasChildren">
        <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Terug naar Dienstprofielen
        </router-link>
        <div class="clearfix"></div>
        <h1 class="pull-left">Dienstprofiel</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default" v-if="loaded">
            <div class="panel-body">
                <p><strong>Titel: </strong> {{ jobProfile.title }}</p>
                <p><strong>Beschrijving: </strong> {{ jobProfile.description }}</p>
                <p><strong>Type voertuig: </strong> {{ jobProfile.vehicle_type }}</p>
                <p><strong>Rijbewijs: </strong> {{ jobProfile.license }}</p>
                <p><strong>Code 95: </strong> {{ jobProfile.code_95 ? 'Ja' : 'Nee' }}</p>
            </div>
        </div>
        <component is="appShiftsView"></component>
        <br>
        <div class="text-center">
            <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
                Terug naar Dienstprofielen
            </router-link>
        </div>
    </div>
    <router-view v-else></router-view>
</template>

<script>
    import ShiftsView from './ShiftsView.vue';

    export default {
        data() {
            return {
                jobProfile: [],
                loaded: false,
            }
        },
        computed: {
            hasChildren(){
                return this.$route.name !== 'JobProfileDetails';
            }
        },
        components: {
            appShiftsView: ShiftsView,
        },
        created(){
            this.$http.get('jobProfiles/' + this.$route.params.jobProfileId)
                .then(response => {
                    return response.json();
                }).then(data => {
                this.jobProfile = data.jobProfile;
                this.loaded = true;
            });
        }
    }
</script>

<style>

</style>
