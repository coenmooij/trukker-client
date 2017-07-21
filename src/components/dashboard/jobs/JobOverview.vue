<template>
    <div class="col-xs-12">
        <h1>Jobs</h1>
        <hr>
        <div class="pull-right">
            <router-link :to="{name: 'JobForm', parameters: {serviceProfileId: serviceProfile.id}}" tag="button"
                         class="btn btn-success"><span
                    class="glyphicon glyphicon-plus "></span> Add Service Profile
            </router-link>
        </div>
        <div class="clearfix"></div>
        <hr>
        <table class="table table-striped" v-if="hasServiceProfiles">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Compensation</th>
                <th>Clothing</th>
                <th>Location</th>
            </tr>
            </thead>
            <tbody>
            <app-service-profile
                    v-for="serviceProfile in serviceProfiles"
                    :serviceProfile="serviceProfile"
                    :key="serviceProfile.id">
            </app-service-profile>
            </tbody>
        </table>
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
    export default {
        props: {
            serviceProfile
        }
    }
</script>