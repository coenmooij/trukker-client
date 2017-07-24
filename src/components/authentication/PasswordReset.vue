<template>
    <div class="password-reset">
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" id="email" type="text">
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-danger pull-right" @click.prevent="reset">
                        <span class="glyphicon glyphicon-repeat"></span> Reset Password
                    </button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <p>Remembered your password?
                <router-link :to="{name: 'Login'}">
                    Login here
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
            reset(){
                console.log('reset password');
                this.$router.push({name: 'Login'});
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
