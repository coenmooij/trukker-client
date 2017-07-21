<template>
    <div class="col-xs-12">
        <h1 class="col-xs-12 col-sm-6 col-md-6 col-lg-6">Service Profile</h1>
        <div class="pull-right navigation col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <router-link tag="button"
                         :to="{name: 'ServiceProfileEdit', params: {id: id}}"
                         class="pull-right btn btn-warning">
                Edit&nbsp; <span class="glyphicon glyphicon-pencil"></span>
            </router-link>
            <router-link tag="button"
                         :to="{name: 'JobsOverview', params: {id: id}}"
                         class="pull-right btn btn-primary">
                View Jobs&nbsp; <span class="glyphicon glyphicon-time"></span>
            </router-link>
        </div>
        <div class="clearfix"></div>
        <hr>
        <div class="col-xs-6">
            <div class="list-group" v-for="(parameter, key) in serviceProfile"><strong>{{key | capitalize }}:</strong>
                {{ parameter }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                serviceProfile: {
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
            }
        }
    }
</script>

<style scoped>
    button {
        margin-left: 20px;
    }

    .navigation {
        padding: 30px 0 0 0;
    }
</style>