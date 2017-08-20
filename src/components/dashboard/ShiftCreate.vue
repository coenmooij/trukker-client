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
                               v-validate="'required'" placeholder="Expeditie Duitsland">
                        <small v-if="showErrors && errors.has('Titel')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Titel') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="description">Beschrijving</label>
                        <textarea class="form-control" id="description" v-model="description"
                                  placeholder="Beschrijf je shift"></textarea>
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
                               v-model="endLocation" v-validate="'required'" placeholder="bijv.: Parijs">
                        <small v-if="showErrors && errors.has('Eindlocatie')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Eindlocatie') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="outbound-cargo">Heenvracht</label>
                        <input class="form-control" id="outbound-cargo" type="text" name="Heenvracht"
                               v-model="outboundCargo" v-validate="'required'" placeholder="bijv.: Voedingswaren">
                        <small v-if="showErrors && errors.has('Heenvracht')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Heenvracht') }}
                        </small>
                    </div>

                    <div class="form-group checkbox">
                        <label for="is-retour">
                            <input type="checkbox" id="is-retour" v-model="isRetour"/>Rit is retour
                        </label>
                    </div>

                    <div class="form-group" v-if="isRetour">
                        <label for="inbound-cargo">Terugvracht</label>
                        <input class="form-control" id="inbound-cargo" type="text" name="Terugvracht"
                               v-model="inboundCargo" v-validate="'required'" placeholder="bijv.: Karton">
                        <small v-if="showErrors && errors.has('Terugvracht')" class="form-text text-danger"><span
                                class="glyphicon glyphicon-remove help is-danger"></span>
                            {{ errors.first('Terugvracht') }}
                        </small>
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
                this.$http.post('jobProfiles/' + this.jobProfileId + '/shifts', {
                    title: this.title,
                    description: this.description,
                    compensation: this.compensation,
                    start_date: this.startDate,
                    end_date: this.endDate,
                    start_location: this.startLocation,
                    end_location: this.endLocation,
                    is_retour: this.isRetour,
                    outbound_cargo: this.outboundCargo,
                    inbound_cargo: this.inboundCargo,
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
