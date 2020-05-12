<template>
    <div class="power-row">
        <remote-button icon="import" color="black" ircc-key="Input" />
        <remote-button icon="power" color="red" ircc-key="Power" />
    </div>
</template>

<script>
import RemoteButton from '../remote-button.vue'
export default {
    components: { RemoteButton },
}
</script>

<style>
.power-row {
    display: flex;
    justify-content: space-between;
}
</style>
