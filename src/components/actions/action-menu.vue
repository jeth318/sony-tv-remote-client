<template>
    <div class="action-menu-row">
        <remote-button
            color="purple"
            text="ACTION MENU"
            :rounded="false"
            ircc-key="Options"
        />
    </div>
</template>

<script>
import RemoteButton from '../remote-button.vue'

export default {
    components: { RemoteButton },
}
</script>

<style>
.action-menu-row {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
