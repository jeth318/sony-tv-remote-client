<template>
    <v-app>
        <v-container fluid>
            <modal
                :active="showModal"
                :close="closeModal"
                :heading="modalHeading"
                :body="modalBody"
            />
            <v-row class="section-row">
                <div class="section">
                    <power-led />
                    <power-group
                        :on-power-button-pressed="onPowerButtonPressed"
                    />
                </div>
            </v-row>
            <v-row class="section-row">
                <div class="section">
                    <action-menu />
                </div>
            </v-row>
            <v-row class="section-row">
                <div class="section">
                    <arrow-group />
                </div>
            </v-row>
            <v-row class="section-row">
                <div class="section">
                    <action-group />
                </div>
            </v-row>
            <v-row class="section-row">
                <div class="section">
                    <volume-group />
                </div>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import ActionGroup from './components/actions/action-group.vue'
import ActionMenu from './components/actions/action-menu.vue'
import ArrowGroup from './components/arrows/arrow-group.vue'
import PowerGroup from './components/power/power-group.vue'
import VolumeGroup from './components/volume/volume-group.vue'
import Modal from './components/info-modal/info-modal.vue'
import { isTurnedOn } from './rest/resource'
import PowerLed from './components/power-led/power-led.vue'

export default {
    name: 'App',
    components: {
        ActionGroup,
        ActionMenu,
        ArrowGroup,
        Modal,
        PowerGroup,
        VolumeGroup,
        PowerLed,
    },
    data: () => ({
        internalIsTurnedOn: false,
        showModal: false,
        modalHeading: '',
        modalBody: '',
    }),
    async mounted() {
        const response = await isTurnedOn()
        if (response.errorEnum === 'NETWORK_ERROR') {
            this.modalHeading = 'Problem med nätverket'
            this.modalBody =
                'Kontrollera att du är ansluten till samma WiFi som din Sony-TV.'
            this.showModal = true
        } else {
            this.internalIsTurnedOn = response.data.active
        }
    },
    methods: {
        closeModal() {
            this.showModal = false
            this.modalHeading = ''
            this.modalBody = ''
        },
        async onPowerButtonPressed() {
            const a = await isTurnedOn()
            this.internalIsTurnedOn = a.response.data.active
        },
    },
}
</script>
<style lang="css" scoped>
#app {
    background-color: grey;
}
.section {
    width: 100%;
}

.row {
    margin-left: 0;
    margin-right: 0;
}
</style>
