<template>
    <div class="volume-control-wrapper">
        <remote-button icon="volume-minus" color="blue" ircc-key="VolumeDown" />
        <remote-button icon="volume-mute" color="grey" ircc-key="Mute" />
        <remote-button icon="volume-plus" color="blue" ircc-key="VolumeUp" />
    </div>
</template>

<script>
import RemoteButton from '../remote-button.vue'
export default {
    components: { RemoteButton },
}
</script>

<style>
.volume-control-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
}

.volume-control-wrapper > button:first-child {
    margin-bottom: 10px;
}
</style>
