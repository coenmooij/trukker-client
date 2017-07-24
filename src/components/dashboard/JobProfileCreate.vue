<template>
    <div class="col-xs-12">
        <h1 class="text-center">Create a Job Profile</h1>
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
                <div class="text-center">
                    <button type="submit" @click.prevent="submitForm" class="btn btn-primary"><span
                            class="glyphicon glyphicon-plus"></span> Create Job Profile
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
                clothing: '',
                location: '',
            }
        },
        methods: {
            submitForm(){
                console.log('form submitted');
                this.$router.push({name: 'JobProfiles'});
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
