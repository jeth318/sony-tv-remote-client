<template>
    <div class="arrow-group col">
        <v-row class="arrow-up-wrapper">
            <remote-button icon="arrow-up" color="blue" ircc-key="Up" />
        </v-row>
        <v-row class="arrow-side-wrapper">
            <remote-button icon="arrow-left" color="blue" ircc-key="Left" />
            <remote-button icon="arrow-right" color="blue" ircc-key="Right" />
        </v-row>
        <v-row class="arrow-down-wrapper">
            <remote-button icon="arrow-down" color="blue" ircc-key="Down" />
        </v-row>
    </div>
</template>

<script>
import RemoteButton from '../remote-button.vue'
export default {
    components: { RemoteButton },
}
</script>

<style>
.arrow-group {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.arrow-up-wrapper,
.arrow-down-wrapper {
    justify-content: center;
}

.arrow-side-wrapper {
    justify-content: center;
}

.arrow-side-wrapper > button:first-child {
    margin-right: 30px;
}

.arrow-side-wrapper > button:last-child {
    margin-left: 30px;
}
</style>
