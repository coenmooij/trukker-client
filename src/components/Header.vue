<template>
    <nav class="navbar navbar-default">
        <div class="container">


        <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                <router-link tag="a" class="navbar-left" :to="{name:'JobProfiles'}">
                    <img alt="Eagle" src="../assets/logo-blue.png">
                </router-link>
        </div>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #fff;
        margin-left: auto;
        margin-right: auto;
    }

    a img {
        margin: 20px -20px;
    }
</style>
