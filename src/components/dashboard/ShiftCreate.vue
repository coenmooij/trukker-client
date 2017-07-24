<template>
    <div class="col-xs-12">
        <h1 class="text-center">Create a Shift</h1>
        <hr>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
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
                <div class="text-center">
                    <button type="submit" @click.prevent="submitForm" class="btn btn-primary"><span
                            class="glyphicon glyphicon-plus"></span> Create Shift
                    </button>
                </div>
            </form>
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
    .preview {
        padding: 30px;
    }

    button {
        margin-top: 10px;
        width: 100%;
    }
</style>
