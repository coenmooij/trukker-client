<template>
    <div class="col-xs-12">
        <h1 class="col-xs-12 col-sm-8 col-md-6 col-lg-6">Jobs</h1>
        <div class="pull-right navigation col-xs-12 col-sm-4 col-md-6 col-lg-6">
            <router-link :to="{name: 'JobForm', params:{id: serviceProfileId}}" tag="button"
                         class="btn btn-success pull-right"><span
                    class="glyphicon glyphicon-plus "></span> Add Job
            </router-link>
        </div>
        <div class="clearfix"></div>
        <hr>
        <table class="table table-striped" v-if="hasJobs">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <app-job
                    v-for="job in jobs"
                    :job="job"
                    :key="job.id">
            </app-job>
            </tbody>
        </table>
        <div class="">
            <div v-if="!hasJobs" class="app-info-box alert alert-info text-center">
                <p>You currently don't have any jobs in your account</p>
                <br>
                <router-link :to="{name: 'JobForm', params:{id: serviceProfileId}}" tag="button" class="btn btn-primary"><span
                        class="glyphicon glyphicon-plus "></span> Add Job
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                jobs: [],
            }
        },
        computed: {
            hasJobs(){
                return this.jobs.length > 0;
            },
            serviceProfileId(){
                return this.$route.params.id;
            }
        }
    }
</script>

<style>
    .navigation{
        padding:30px 0 0 0;
    }
</style>