<template>
    <div>
        <h2 class="col-xs-12 col-sm-8 col-md-6 col-lg-6">Shifts</h2>
        <div class="pull-right navigation col-xs-12 col-sm-4 col-md-6 col-lg-6">
            <router-link :to="{name: 'ShiftCreate', params:{jobProfileId: jobProfileId}}" tag="button"
                         class="btn btn-success pull-right"><span
                    class="glyphicon glyphicon-plus "></span> Add Shift
            </router-link>
        </div>
        <div class="clearfix"></div>
        <hr>
        <table class="table table-striped" v-if="hasShifts">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <app-shift
                    v-for="shift in shifts"
                    :shift="shift"
                    :key="shift.id">
            </app-shift>
            </tbody>
        </table>
        <div class="">
            <div v-if="!hasShifts" class="app-info-box alert alert-info text-center">
                <p>You currently don't have any shifts in your account</p>
                <br>
                <router-link :to="{name: 'ShiftCreate', params:{jobProfileId: jobProfileId}}" tag="button"
                             class="btn btn-primary"><span
                        class="glyphicon glyphicon-plus "></span> Add Shift
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                shifts: [],
            }
        },
        computed: {
            hasShifts(){
                return this.shifts.length > 0;
            },
            jobProfileId(){
                return this.$route.params.jobProfileId;
            }
        }
    }
</script>

<style scoped>
    .navigation {
        padding: 30px 0 0 0;
    }
</style>