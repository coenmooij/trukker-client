<template>

    <router-link class="cursor panel panel-default" tag="div"
                 :to="{name: 'JobProfileDetails', params:{jobProfileId: jobProfile.id}}">
        <div class="panel-body">
            <div class="col-xs-12 col-sm-8">
                <h4>{{ jobProfile.title }}</h4>
                <p>{{ jobProfile.description}}</p>
            </div>
            <div class="col-xs-12 col-sm-4 pull-right app-meta">
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
    .app-meta {
        padding-top: 10px;
    }

</style>
