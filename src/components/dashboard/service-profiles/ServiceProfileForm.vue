<template>
    <div class="col-xs-12">
        <h1>Create a Service Profile</h1>
        <hr>
        <div class="col-xs-6 offset-xs-3">
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input class="form-control" id="title" type="text" v-model="title" placeholder="Truck Driver">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" v-model="description"
                              placeholder="Describe your Service Profile"/>
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
                <button type="submit" @click.prevent="submitForm" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Create Service Profile</button>

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
            }
        }
    }
</script>

<style scoped>
    .preview {
        padding: 30px;
    }
</style>
