<template>

    <router-link class="cursor panel panel-default" tag="div"
                 :to="{name: 'JobProfileDetails', params:{jobProfileId: jobProfile.id}}">
        <div class="panel-body">
            <div class="pull-left">
                <h4>{{ jobProfile.title }}</h4>
                <p>{{ jobProfile.description}}</p>
            </div>
            <div class="pull-right">
                <p>Compensation: {{ jobProfile.compensation }}</p>
                <p>Location: {{ jobProfile.location }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            jobProfile: {
                id: Number,
                title: String,
                description: String,
                compensation: String,
                location: String,
            },
        },
    }
</script>

<style scoped>

</style>
