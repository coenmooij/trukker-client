<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 wrapper">
                <transition name="fade" mode="ease-in-out" appear>
                    <div class="logo text-center">
                        <router-link tag="a" :to="{name:'JobProfiles'}">
                            <img class="center-block" alt="Eagle" src="../../assets/logo-blue-150x80.png">
                        </router-link>
                        <div class="clearfix"></div>
                    </div>
                </transition>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .logo {
        padding: 30px;
    }

    .wrapper {
        margin-top: 20%;
    }
</style>
