<template>
    <div class="panel panel-default cursor" @click="selectShift">
        <div class="panel-body">
            <div class="pull-left">
                <h4><strong>{{ shift.title }}</strong></h4>
                <p>{{ shift.description}}</p>
            </div>
            <div class="pull-right">
                <p>Compensation: {{ shift.compensation }}</p>
                <p>Location: {{ shift.location }}</p>
                <p>{{ shift.time }} - {{ shift.date }}</p>
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
                Time: String,
                Date: String,
                Location: String,
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
</style>
