<template>
    <div class="actions-row">
        <remote-button color="orange" :rounded=false text="BACK" irccKey='Back' ></remote-button>
        <remote-button color="green" :rounded=false text="OK" irccKey='Confirm'></remote-button>
    </div>
</template>

<script>
import RemoteButton from '../remote-button.vue';

export default {
    components: { RemoteButton }
};
</script>

<style>
    .actions-row {
        display: flex;
        justify-content: space-evenly;
        margin-top: 40px;
    }
</style>