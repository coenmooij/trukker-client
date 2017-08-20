<template>
    <div class="panel panel-default cursor" @click="selectShift">
        <div class="panel-body">
            <div class="col-xs-12 col-sm-8">
                <h4><strong>{{ shift.title }}</strong></h4>
                <p>{{ shift.description}}</p>
            </div>
            <div class="col-xs-12 col-sm-4 app-meta">
                <p><strong>{{ shift.start_location }}</strong> naar <strong>{{ shift.end_location }}</strong></p>
                <p><strong>€{{ shift.compensation }},-</strong> per uur</p>
                <p><strong>{{ shift.start_date }}</strong> tot <strong>{{ shift.end_date }}</strong></p>
                <p v-if="!shift.is_retour">Vracht: <strong>{{ shift.outbound_cargo }}</strong></p>
                <p v-if="shift.is_retour">
                    Heenvracht: <strong>{{ shift.outbound_cargo }}</strong>,<br>
                    Terugvracht: <strong>{{ shift.inbound_cargo }}</strong>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            shift: {
                id: Number,
                title: String,
                description: String,
                compensation: String,
                start_date: String,
                end_date: String,
                start_location: String,
                end_location: String,
                is_retour: Boolean,
                outbound_cargo: String,
                inbound_cargo: String,
            },
        },
        methods: {
            selectShift(){
                this.$router.push({
                    name: 'ShiftDetails',
                    params: {shiftId: this.shift.id}
                });
            },
        },
    }
</script>

<style scoped>
    h4 span {
        font-size: 0.8em;
    }

    .app-meta {
        padding-top: 10px;
    }
</style>
