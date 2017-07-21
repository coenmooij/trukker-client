<template>
    <h1>Service Profile Edit for id {{ id }}</h1>
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