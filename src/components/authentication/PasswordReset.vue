<template>
    <div class="password-reset">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-success text-center" v-if="showSuccessMessage">
                    <p><span class="glyphicon glyphicon-ok"></span> Instructies om je wachtwoord te herstellen zijn verzonden naar het emailadres dat je hebt opgegeven.</p><br>
                    <button class="btn btn-success" @click="redirect">Naar inloggen</button>
                </div>
                <form>
                    <div class="form-group">
                        <label for="email">Emailadres*</label>
                        <input class="form-control" id="email" name="Emailadres" type="text" v-model.lazy="email"
                               v-validate="'required|email'">
                        <small v-if="showErrors && errors.has('Emailadres')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Emailadres') }}
                        </small>
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-danger pull-right" @click.prevent="submit">
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
        data(){
            return {
                email: '',
                showSuccessMessage: false,
                showErrors: false,
            };
        },
        methods: {
            redirect(){
                this.$router.push('/');
            },
            submit(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.reset();
                    } else {
                        this.showErrors = true;
                    }
                });
            },
            reset(){
                this.$http.post('authentication/resetPassword', {
                    email: this.email,
                }).then(response => {
                    response.json()
                }).then(data => {
                    this.showSuccessMessage = true;
                }).catch(error => {
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
