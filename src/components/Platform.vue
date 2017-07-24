<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                    <router-view></router-view>
                </div>
            </div>
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
