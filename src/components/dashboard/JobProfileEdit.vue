<template>
    <h1>Job Profile Edit for id {{ id }}</h1>
</template>

<script>
    export default {
        computed: {
            id(){
                return this.$route.params.id;
            }
        }
    }
</script>