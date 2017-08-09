<template>
    <div class="login">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-danger text-center" v-if="error">
                    <p>Onjuist emailadres of wachtwoord</p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="email">Emailadres</label>
                        <input class="form-control" id="email" name="email" type="text" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Wachtwoord</label>
                        <input class="form-control" id="password" type="password" v-model="password">
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-primary pull-right" @click.prevent="login">
                        <span class="glyphicon glyphicon-user"></span> Inloggen
                    </button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <p>Wachtwoord vergeten?
                <router-link :to="{name:'PasswordReset'}">
                    Reset wachtwoord
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
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data(){
            return {
                email: '',
                password: '',
                error: false,
            };
        },
        computed: {
            ...mapGetters({
                token: 'getToken'
            }),
        },
        methods: {
            ...mapActions({
                setToken: 'setToken'
            }),
            login(){
                this.$http.post('authentication/login', {
                    email: this.email,
                    password: this.password,
                }).then(response => response.json())
                    .then(data => {
                        if (data.token) {
                            this.setToken(data.token);
                        }
                        this.$router.push({name: 'Dashboard'});
                    }).catch(function (error) {
                    this.error = error;
                });
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
