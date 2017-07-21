<template>
    <tr>
        <td>{{ serviceProfile.title }}</td>
        <td>{{ serviceProfile.description }}</td>
        <td>{{ serviceProfile.compensation }}</td>
        <td>{{ serviceProfile.clothing }}</td>
        <td>{{ serviceProfile.location }}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            serviceProfile: {
                id: Number,
                title: String,
                description: String,
                compensation: String,
                clothing: String,
                location: String,
            },
        }
    }
</script>

