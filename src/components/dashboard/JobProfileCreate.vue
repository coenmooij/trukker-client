<template>
    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
        <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Terug naar Dienstprofielen
        </router-link>
        <div class="clearfix"></div>
        <h1 class="pull-left">Dienstprofiel aanmaken</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-danger text-center" v-if="error">
                    <p>Aanmaken mislukt</p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="title">Titel*</label>
                        <input class="form-control" id="title" type="text" name="Titel" v-model="title"
                               v-validate="'required'"
                               placeholder="bijv.: Ervaren vrachtwagenchauffeur">
                        <small v-if="showErrors && errors.has('Titel')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Titel') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="description">Beschrijving</label>
                        <textarea class="form-control" id="description" v-model="description"
                                  placeholder="Beschrijf hier je dienstprofiel"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="vehicle_type">Type Voertuig</label>
                        <input class="form-control" id="vehicle_type" name="Type voertuig" v-model="vehicle_type"
                               v-validate="'required'" placeholder="bijv.: Oplegger/Aanhangwagen/LZV"/>
                        <small v-if="showErrors && errors.has('Type voertuig')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Type voertuig') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="license">Rijbewijs*</label>
                        <input class="form-control" id="license" name="Rijbewijs" v-model="license"
                               v-validate="'required'" placeholder="bijv.: Rijbewijs B & C"/>
                        <small v-if="showErrors && errors.has('Rijbewijs')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Rijbewijs') }}
                        </small>
                    </div>
                    <div class="form-group checkbox">
                        <label for="code-95">
                            <input type="checkbox" id="code-95" v-model="code_95"/>In bezit van Code 95
                        </label>
                    </div>
                    <br>
                    <button type="submit" style="width:100%;" @click.prevent="submit"
                            class="btn btn-primary text-center"><span
                            class="glyphicon glyphicon-plus"></span> Dienstprofiel aanmaken
                    </button>
                </form>
            </div>
        </div>
        <div class="text-center">
            <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
                Terug naar Dienstprofielen
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: '',
                description: '',
                license: '',
                code_95: false,
                vehicle_type: '',
                showErrors: false,
                error: false,
            }
        },
        methods: {
            submit(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.createShift();
                    } else {
                        this.showErrors = true;
                    }
                });
            },
            createShift(){
                this.$http.post('jobProfiles', {
                    title: this.title,
                    description: this.description,
                    license: this.license,
                    vehicle_type: this.vehicle_type,
                    code_95: this.code_95,
                }).then(response => {
                    return response.json();
                }).then(data => {
                    this.$router.push({name: 'Login'});
                }).catch(function (error) {
                    this.error = error;
                });
            }
        }
    }
</script>

<style scoped>
    form {
        padding: 20px;
    }
</style>
