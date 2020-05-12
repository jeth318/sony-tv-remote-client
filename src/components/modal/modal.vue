<template>
    <div class="text-center">
        <v-dialog v-model="active" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    {{ heading }}
                </v-card-title>

                <v-card-text>
                    {{ body }}
                </v-card-text>

                <v-divider />

                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" text @click="close">
                        Stäng
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        active: { type: Boolean, default: false },
        close: { type: Function, required: true },
        heading: { type: String, default: 'Heading' },
        body: { type: String, default: 'Body' },
    },
    data: function() {
        return {
            dialog: this.active,
        }
    },
    methods: {
        internalClose() {
            return this.close()
        },
    },
}
</script>
