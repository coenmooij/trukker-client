<template>
    <div v-if="!hasChildren">
        <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Back to Job Profiles
        </router-link>
        <h1 class="col-xs-12">Job Profile</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default">
            <div class="panel-body">
                <p v-for="(parameter, key) in jobProfile">
                    <strong>{{key | capitalize }}:</strong> {{ parameter }}
                </p>
            </div>
        </div>
        <component is="appShiftsView"></component>
        <div class="text-center">
            <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
                Back to Job Profiles
            </router-link>
        </div>
        </div>
    </div>
    <router-view v-else></router-view>
</template>

<script>
    import ShiftsView from './ShiftsView.vue';

    export default {
        data() {
            return {
                jobProfile: {
                    title: 'Truck Driver',
                    description: 'I want a good truck driver',
                    compensation: '$100/hour',
                    clothing: 'Extra warm',
                    location: 'Amsterdam',
                },
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
    }
</script>

<style>

</style>
