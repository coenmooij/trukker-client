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
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input class="form-control" id="email" type="text">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input class="form-control" id="password" type="text">
                            </div>
                            <div class="divider"></div>
                            <button type="submit" class="btn btn-primary pull-right" @click.prevent="login">
                                <span class="glyphicon glyphicon-user"></span> Login
                            </button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
                <div class="text-center">
                    <p>Forgot your password?
                        <router-link to="PasswordReset">
                            Reset my password
                        </router-link>
                    </p>
                    <div class="divider"></div>
                    <p>Don't have an account yet?
                        <router-link to="Register">
                            Register here
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login(){
                console.log('logged in');
                this.$router.push({name: 'JobProfiles'});
            },
        },
    }
</script>

<style scoped>
    button {
        width: 100%;
    }

    .logo {
        padding: 30px;
    }

    .wrapper {
        margin-top: 20%;
    }

    form {
        padding: 10px;
    }
</style>
