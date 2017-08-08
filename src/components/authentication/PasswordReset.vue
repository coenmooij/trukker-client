<template>
    <div class="password-reset">
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="email">Emailadres</label>
                        <input class="form-control" id="email" type="text">
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-danger pull-right" @click.prevent="reset">
                        <span class="glyphicon glyphicon-repeat"></span> Reset Wachtwoord
                    </button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <p>Wel een wachtwoord?
                <router-link :to="{name: 'Login'}">
                    Inloggen
                </router-link>
            </p>
            <div class="divider"></div>
            <p>Nog geen account?
                <router-link :to="{name: 'Register'}">
                    Registreren
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
