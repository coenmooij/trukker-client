<template>
    <router-link class="cursor" tag="tr" :to="{name: 'ServiceProfileView', params:{id: serviceProfile.id} }">
        <td>{{ serviceProfile.title }}</td>
        <td>{{ serviceProfile.description }}</td>
        <td>{{ serviceProfile.compensation }}</td>
        <td>{{ serviceProfile.clothing }}</td>
        <td>{{ serviceProfile.location }}</td>
    </router-link>
</template>

<script>
    export default {
        props: {
            serviceProfile: {
                id: Number,
                title: String,
                description: String,
                compensation: String,
                clothing: String,
                location: String,
            },
        },
    }
</script>

<style scoped>
    .cursor {
        cursor: pointer;
    }

    .cursor:hover {
        background-color: #d7e7ff;
    }
</style>

