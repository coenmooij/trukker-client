<template>
    <div class="register">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-danger" v-if="error">Registreren mislukt</div>
                <form>
                    <div class="form-group">
                        <label for="company">Bedrijf*</label>
                        <input class="form-control" id="company" name="Bedrijf" type="text" v-model="company"
                               v-validate="'required'">
                        <small v-if="showErrors && errors.has('Bedrijf')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Bedrijf') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="firstName">Voornaam*</label>
                        <input class="form-control" id="firstName" name="Voornaam" type="text" v-model="firstName"
                               v-validate="'required|alpha_spaces'">
                        <small v-if="showErrors && errors.has('Voornaam')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Voornaam') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Achternaam*</label>
                        <input class="form-control" id="lastName" name="Achternaam" type="text" v-model="lastName"
                               v-validate="'required|alpha_spaces'">
                        <small v-if="showErrors  && errors.has('Achternaam')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Achternaam') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="email">Emailadres*</label>
                        <input class="form-control" id="email" name="Emailadres" type="text" v-model.lazy="email"
                               v-validate="'required|email'">
                        <small v-if="showErrors && errors.has('Emailadres')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Emailadres') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="password">Wachtwoord*</label>
                        <input class="form-control" id="password" name="Wachtwoord" type="password"
                               v-model.lazy="password" v-validate="'required|alpha_dash|min:6'">
                        <small v-if="showErrors && errors.has('Wachtwoord')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Wachtwoord') }}
                        </small>
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-primary pull-right" @click.prevent="submit">
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
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data(){
            return {
                company: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                error: false,
                showErrors: false,
            };
        },
        methods: {
            submit(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.register();
                    } else {
                        this.showErrors = true;
                    }
                });
            },
            register(){
                this.$http.post('authentication/registerClient', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password,
                    company: this.company,
                }).then(response => {
                    response.json()
                }).then(data => {
                    this.$router.push({name: 'Login'});
                }).catch(function (error) {
                    this.error = error;
                });
            }
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
