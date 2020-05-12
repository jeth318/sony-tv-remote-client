<template>
    <div class="text-left">
        <v-btn @click="sheet = !sheet">
            <v-icon>mdi-settings</v-icon>
        </v-btn>
        <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center" height="250px">
                <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
                    Stäng
                </v-btn>
                <div class="py-3">
                    Ange IP-addressen för din Sony TV
                </div>
                <div class="input-wrapper">
                    <v-text-field
                        v-model="ipAddress"
                        clearable
                        placeholder="192.168.1.23"
                        label="Sony TV IP-address"
                    />
                </div>
                <v-btn @click="ping">
                    Testa anslutning
                </v-btn>
                <v-icon
                    x-large
                    class="ping-status"
                    :color="validConnection ? 'green' : 'red'"
                >
                    mdi-check
                </v-icon>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script>
import { pingTv } from '../../rest/resource.config'
export default {
    props: {
        icon: { type: String, default: '' },
        color: { type: String, default: 'success' },
    },
    data: () => ({
        sheet: false,
        ipAddress: localStorage.getItem('sony-tv-ip'),
        validConnection: false,
    }),
    watch: {
        ipAddress(newIp, oldIp) {
            if (newIp !== oldIp) {
                localStorage.setItem('sony-tv-ip', newIp)
            }
        },
    },
    async mounted() {
        this.validConnection = await this.ping()
    },
    methods: {
        async ping() {
            const response = await pingTv()
            this.validConnection = response
        },
    },
}
</script>

<style>
.input-wrapper {
    padding-left: 20px;
    padding-right: 20px;
}

.ping-status {
    margin-left: 10px;
}
</style>
