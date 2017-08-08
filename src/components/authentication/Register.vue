<template>
    <div class="register">
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="company">Bedrijf</label>
                        <input class="form-control" id="company" type="text">
                    </div>
                    <div class="form-group">
                        <label for="firstName">Voornaam</label>
                        <input class="form-control" id="firstName" type="text">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Achternaam</label>
                        <input class="form-control" id="lastName" type="text">
                    </div>
                    <div class="form-group">
                        <label for="email">Emailadres</label>
                        <input class="form-control" id="email" type="text">
                    </div>
                    <div class="form-group">
                        <label for="password">Wachtwoord</label>
                        <input class="form-control" id="password" type="password">
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-primary pull-right" @click.prevent="register">
                        <span class="glyphicon glyphicon-check"></span> Registreren
                    </button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <p>Heb je al een account?
                <router-link :to="{name: 'Login'}">
                    Inloggen
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
