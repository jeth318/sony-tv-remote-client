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
                    <settings-panel />
                </div>
            </v-row>
            <v-row class="section-row">
                <div class="section">
                    <div style="display: flex; justify-content: center;">
                        <div v-if="isTurnedOn" class="power-status on" />
                        <div v-else class="power-status off" />
                    </div>
                    <power-group />
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
import Modal from './components/modal/modal.vue'
import { isTurnedOn } from './rest/resource'
import SettingsPanel from './components/settings-panel/settings-panel.vue'

export default {
    name: 'App',
    components: {
        ActionGroup,
        ActionMenu,
        ArrowGroup,
        Modal,
        PowerGroup,
        SettingsPanel,
        VolumeGroup,
    },
    data: () => ({
        isTurnedOn: false,
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
            this.isTurnedOn = response.data.active;
        }
    },
    methods: {
        closeModal() {
            this.showModal = false
            this.modalHeading = ''
            this.modalBody = ''
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

.power-status {
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
