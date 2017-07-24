<template>
    <div class="panel panel-default cursor" @click="selectShift">
        <div class="panel-body">
            <div class="col-xs-12 col-sm-8">
                <h4><strong>{{ shift.title }}</strong></h4>
                <p>{{ shift.description}}</p>
            </div>
            <div class="col-xs-12 col-sm-4 app-meta">
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

    .app-meta {
        padding-top: 10px;
    }
</style>
