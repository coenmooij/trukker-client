<template>
    <div>
        <h2 class="pull-left">Shifts</h2>
        <div class="pull-right app-top-buttons">
            <router-link :to="{name: 'ShiftCreate', params:{jobProfileId: jobProfileId}}" tag="button"
                         class="btn btn-primary pull-right"><span
                    class="glyphicon glyphicon-plus "></span> Shift aanmaken
            </router-link>
        </div>
        <div class="clearfix"></div>
        <br>
        <app-shift
                v-for="shift in shifts"
                :shift="shift"
                :key="shift.id">
        </app-shift>
        <div v-if="!hasShifts && loaded" class="app-info-box alert alert-warning text-center">
            <p>Je hebt nog geen shifts voor dit dienstprofiel</p>
        </div>
        <div v-if="hasShifts" class="text-center app-bordered">
            <router-link :to="{name: 'ShiftCreate'}" tag="button" class="btn btn-primary"><span
                    class="glyphicon glyphicon-plus "></span> Shift aanmaken
            </router-link>
        </div>
    </div>
</template>

<script>
    import Shift from './Shift.vue';

    export default {
        data(){
            return {
                loaded: false,
                shifts: [],
            }
        },
        computed: {
            hasShifts(){
                return this.shifts.length > 0;
            },
            jobProfileId(){
                return this.$route.params.jobProfileId;
            }
        },
        components: {
            appShift: Shift,
        },
        created(){
            this.$http.get('jobProfiles/' + this.$route.params.jobProfileId + '/shifts')
                .then(response => {
                    return response.json();
                }).then(data => {
                this.shifts = data.shifts;
                this.loaded = true;
            });
        },
    }
</script>

<style>
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
