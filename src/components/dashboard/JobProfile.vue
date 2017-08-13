<template>

    <router-link class="cursor panel panel-default" tag="div"
                 :to="{name: 'JobProfileDetails', params:{jobProfileId: jobProfile.id}}">
        <div class="panel-body">
            <div class="col-xs-12 col-sm-8">
                <h4>{{ jobProfile.title }}</h4>
                <p>{{ jobProfile.description}}</p>
            </div>
            <div class="col-xs-12 col-sm-4 pull-right app-meta">
                <p><strong>Type Voertuig:</strong> {{ jobProfile.vehicle_type}}</p>
                <p><strong>Rijbewijs:</strong> {{ jobProfile.license }}</p>
                <p><strong>In bezit van Code 95:</strong> {{ jobProfile.code_95 ? 'Ja' : 'Nee' }}</p>
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
                vehicle_type: String,
                license: String,
                code_95: Boolean,
            },
        },
    }
</script>

<style scoped>
    .app-meta {
        padding-top: 10px;
    }

</style>
