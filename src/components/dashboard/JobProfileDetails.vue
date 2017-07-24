<template>
    <div class="col-xs-12" v-if="!hasChildren">
        <h1 class="col-xs-12">Job Profile</h1>
        <div class="clearfix"></div>
        <hr>
        <div class="col-xs-6">
            <div class="list-group" v-for="(parameter, key) in jobProfile"><strong>{{key | capitalize }}:</strong>
                {{ parameter }}
            </div>
        </div>
        <div class="clearfix"></div>
        <hr>
        <component is="appShiftsView"></component>
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
            id(){
                return this.$route.params.id;
            },
            hasChildren(){
                return this.$route.name !== 'JobProfileDetails';
            }
        },
        components: {
            appShiftsView: ShiftsView,
        },
    }
</script>
