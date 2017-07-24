<template>
    <div class="register">
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input class="form-control" id="company" type="text">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" id="email" type="text">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" id="password" type="text">
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-primary pull-right" @click.prevent="register">
                        <span class="glyphicon glyphicon-check"></span> Register
                    </button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <p>Already have an account?
                <router-link :to="{name: 'Login'}">
                    Login here
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            register(){
                console.log('registered');
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
