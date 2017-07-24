<template>
    <router-link class="cursor" tag="tr" :to="{name: 'JobProfileDetails', params:{jobProfileId: jobProfile.id}}">
        <td>{{ jobProfile.title }}</td>
        <td>{{ jobProfile.description }}</td>
        <td>{{ jobProfile.compensation }}</td>
        <td>{{ jobProfile.clothing }}</td>
        <td>{{ jobProfile.location }}</td>
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
