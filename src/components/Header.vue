<template>
    <nav class="navbar navbar-default">
        <div class="container">
                <router-link tag="a" class="navbar-left" :to="{name:'JobProfiles'}">
                    <img alt="Eagle" src="../assets/logo-blue.png">
                </router-link>
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
        margin: 20px 0;
    }
</style>
