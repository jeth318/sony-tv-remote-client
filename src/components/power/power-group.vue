<template>
    <div class="power-row">
        <remote-button icon="import" color="black" irccKey='Input'></remote-button>
        <remote-button icon="power" color="red" irccKey='Power'></remote-button>
    </div>
</template>

<script>
import RemoteButton from '../remote-button.vue';
export default {
    components: { RemoteButton }
};
</script>

<style>
    .power-row {
        display: flex;
        justify-content: space-between;
    }

</style>