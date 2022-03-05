<template>
    <div style="display: flex; justify-content: center">
        <div v-if="internalIsTurnedOn" class="power-status on" />
        <div v-else class="power-status off" />
    </div>
</template>

<script>
import { isTurnedOn } from '../../rest/resource'
export default {
    data: function () {
        return {
            internalIsTurnedOn: false,
        }
    },
    async mounted() {
        const { data } = await isTurnedOn()
        this.internalIsTurnedOn = data.active
        setInterval(async () => {
            try {
                const { data } = await isTurnedOn()
                this.internalIsTurnedOn = data.active
            } catch (error) {
                console.error('Failed to fetch power status')
            }
        }, 5000)
    },
}
</script>

<style>
.power-status {
    margin-top: 20px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
}

.on {
    background-color: green;
}

.off {
    background-color: darkred;
}
</style>
