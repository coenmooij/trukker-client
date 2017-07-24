<template>
    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
        <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Back to Job Profiles
        </router-link>
        <div class="clearfix"></div>
        <h1 class="pull-left">Create a Job Profile</h1>
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
                                  placeholder="Describe your Job Profile"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="compensation">Compensation</label>
                        <input class="form-control" id="compensation" v-model="compensation" placeholder="$10/hour"/>
                    </div>
                    <div class="form-group">
                        <label for="clothing">Clothing</label>
                        <input class="form-control" id="clothing" v-model="clothing" placeholder="e.g. Formal/Warm"/>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input class="form-control" id="location" v-model="location" placeholder="Amsterdam"/>
                    </div>
                    <br>
                    <button type="submit" style="width:100%;" @click.prevent="submitForm"
                            class="btn btn-primary text-center"><span
                            class="glyphicon glyphicon-plus"></span> Create Job Profile
                    </button>
                </form>
            </div>
        </div>
        <div class="text-center">
            <router-link :to="{name: 'JobProfiles'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
                Back to Job Profiles
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
                compensation: '',
                clothing: '',
                location: '',
            }
        },
        methods: {
            submitForm(){
                console.log('form submitted');
                this.$router.push({name: 'JobProfiles'});
            },
            cancel(){
            },
        }
    }
</script>

<style scoped>
    form {
        padding: 20px;
    }
</style>
