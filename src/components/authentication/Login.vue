<template>
    <div class="login">
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" id="email" type="text">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" id="password" type="password">
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
                <router-link :to="{name:'PasswordReset'}">
                    Reset my password
                </router-link>
            </p>
            <div class="divider"></div>
            <p>Don't have an account yet?
                <router-link :to="{name: 'Register'}">
                    Register here
                </router-link>
            </p>
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

    form {
        padding: 10px;
    }
</style>
