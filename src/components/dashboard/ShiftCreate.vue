<template>
    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
        <router-link :to="{name: 'JobProfileDetails'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Back to Job Profile details
        </router-link>
        <h1 class="col-xs-12">Create a Shift</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" id="title" type="text" v-model="title" placeholder="Truck Driver">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" v-model="description"
                                  placeholder="Describe your Shift"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="compensation">Compensation</label>
                        <input class="form-control" id="compensation" v-model="compensation" placeholder="$10/hour"/>
                    </div>
                    <div class="form-group">
                        <label for="time">Time</label>
                        <input class="form-control" id="time" v-model="time" placeholder="2 days"/>
                    </div>
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input class="form-control" id="date" v-model="date" placeholder="July 2 - July 10"/>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input class="form-control" id="location" v-model="location" placeholder="Amsterdam"/>
                    </div>
                    <br>
                    <div class="text-center">
                        <button type="submit" @click.prevent="submitForm" class="btn btn-primary"><span
                                class="glyphicon glyphicon-plus"></span> Create Shift
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <router-link :to="{name: 'JobProfileDetails'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Back to Job Profile details
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: '',
                description: '',
                compensation: '',
                time: '',
                date: '',
                location: '',
            }
        },
        computed: {
            jobProfileId(){
                return this.$route.params.jobProfileId;
            }
        },
        methods: {
            submitForm(){
                console.log('form submitted');
                this.$router.push({name: 'JobProfileDetails', parameters: {jobProfileId: this.jobProfileId}});
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
