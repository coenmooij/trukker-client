<template>
    <div class="container">
        <div class="row">
            <app-header></app-header>
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        components: {
            appHeader: Header
        },
    }
</script>

<style>
    body {
        padding: 20px;
    }
</style>
