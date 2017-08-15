<template>
    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
        <router-link :to="{name: 'JobProfileDetails'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Terug naar Dienstprofiel
        </router-link>
        <div class="clearfix"></div>
        <h1 class="pull-left">Shift aanmaken</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="title">Titel</label>
                        <input class="form-control" id="title" type="text" name="Titel" v-model="title"
                               v-validate="'required'" placeholder="Truck Driver">
                        <small v-if="showErrors && errors.has('Titel')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Titel') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="description">Beschrijving</label>
                        <textarea class="form-control" id="description" v-model="description"
                                  placeholder="Describe your Shift"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="compensation">Uurtarief</label>
                        <input class="form-control" id="compensation" name="Uurtarief" type="number"
                               v-validate="'numeric'" v-model="compensation" number/>
                        <small v-if="showErrors && errors.has('Uurtarief')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Uurtarief') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="start-date">Startdatum</label>
                        <input class="form-control" id="start-date" name="Startdatum" placeholder="01/01/2017"
                               v-validate="'required'" v-model="startDate"/>
                        <small v-if="showErrors && errors.has('Startdatum')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Startdatum') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="end-date">Einddatum</label>
                        <input class="form-control" id="end-date" name="Einddatum" placeholder="01/01/2017"
                               v-validate="'required'" v-model="endDate"/>
                        <small v-if="showErrors && errors.has('Einddatum')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Einddatum') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="start-location">Startlocatie</label>
                        <input class="form-control" id="start-location" type="text" name="Startlocatie"
                               v-model="startLocation" v-validate="'required'" placeholder="bijv.: Amsterdam">
                        <small v-if="showErrors && errors.has('Startlocatie')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Startlocatie') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="end-location">Eindlocatie</label>
                        <input class="form-control" id="end-location" type="text" name="Eindlocatie"
                               v-model="startLocation" v-validate="'required'" placeholder="bijv.: Parijs">
                        <small v-if="showErrors && errors.has('Eindlocatie')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Eindlocatie') }}
                        </small>
                    </div>

                    <div class="form-group checkbox">
                        <label for="code-95">
                            <input type="checkbox" id="code-95" v-model="code_95"/>Rit is retour
                        </label>
                    </div>

                    <br>
                    <div class="text-center">
                        <button type="submit" @click.prevent="submit" class="btn btn-primary"><span
                                class="glyphicon glyphicon-plus"></span> Shift aanmaken
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <router-link :to="{name: 'JobProfileDetails'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
                Terug naar Dienstprofiel
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
                compensation: 20,
                startDate: '',
                endDate: '',
                startLocation: '',
                endLocation: '',
                isRetour: false,
                outboundCargo: '',
                inboundCargo: '',
                showErrors: false,
                error: false,
            }
        },
        computed: {
            jobProfileId(){
                return this.$route.params.jobProfileId;
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
                    // TODO : ADD Stuff
                }).then(response => {
                    return response.json();
                }).then(data => {
                    this.$router.push({name: 'JobProfileDetails', parameters: {jobProfileId: this.jobProfileId}});
                }).catch(function (error) {
                    this.error = error;
                });
            }
        }
    }
</script>

<style scoped>
    button {
        width: 100%;
    }

    form {
        padding: 20px;
    }
</style>
