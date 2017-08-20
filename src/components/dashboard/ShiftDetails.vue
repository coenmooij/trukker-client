<template>
    <div>
        <router-link :to="{name: 'JobProfileDetails'}"><span class="glyphicon glyphicon-share-alt flip-180"></span>
            Terug naar Dienstprofiel
        </router-link>
        <div class="clearfix"></div>
        <h1 class="pull-left">Shift</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default">
            <div class="panel-body">
                <p><strong>Titel:</strong> {{ shift.title }}</p>
                <p><strong>Beschrijving:</strong> {{ shift.description}}</p>
                <p><strong>Startlocatie:</strong> {{ shift.start_location}}</p>
                <p><strong>Eindlocatie:</strong> {{ shift.end_location}}</p>
                <p><strong>Startdatum:</strong> {{ shift.start_date}}</p>
                <p><strong>Einddatum:</strong> {{ shift.end_date}}</p>
                <p><strong>Uurtarief:</strong> €{{ shift.compensation }},-</p>
                <p v-if="!shift.is_retour"><strong>Vracht:</strong> {{ shift.outbound_cargo }}</p>
                <p v-if="shift.is_retour"><strong>Heenvracht:</strong> {{ shift.outbound_cargo }}</p>
                <p v-if="shift.is_retour"><strong>Terugvracht:</strong> {{ shift.inbound_cargo }}</p>
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
        data() {
            return {
                shift: {},
            }
        },
        created(){
            this.$http.get('shifts/' + this.$route.params.shiftId)
                .then(response => {
                    return response.json();
                }).then(data => {
                this.shift = data.shift;
            });
        }
    }
</script>

<style>

</style>
