<template>
    <v-btn :color=color :fab=rounded x-large dark @click="dispatchRequest">
        <v-icon v-if="!text">mdi-{{icon}}</v-icon>
        {{ text }} 
    </v-btn>
</template>

<script>
import { sendIRCCCommand } from '../rest/resource.config';
import IRCC from '../utils/ircc-codes';
export default {
    props: {
        icon: { type: String, default: '' },
        color: { type: String, default: 'success' },
        rounded: { type: Boolean, default: true },
        text: { type: String, default: '' },
        irccKey: { type: String, default: '' }
    },
    methods: {
        dispatchRequest() {
            console.log(this.irccKey);
            console.log(IRCC[this.irccKey]);
            sendIRCCCommand(IRCC[this.irccKey]);
        }
    }
};
</script>

<style>
</style>