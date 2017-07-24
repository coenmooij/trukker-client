<template>
    <div>
        <h1 class="col-xs-12">Shift</h1>
        <div class="clearfix"></div>
        <div class="divider"></div>
        <div class="panel panel-default">
            <div class="panel-body">
                    <p v-for="(parameter, key) in shift"><strong>{{key | capitalize
                        }}:</strong>
                        {{ parameter }}
                    </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shift: {
                    title: 'Shift',
                    description: 'vandaag iemand nodig voor de catering',
                    compensation: '10$/h',
                    time: '2 dagen',
                    date: '3 juli t/m 15 juli',
                    location: 'Amsterdam centrum',
                },
            }
        },
    }
</script>

<style>

</style>
