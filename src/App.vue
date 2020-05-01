<template>
  <v-app>
    <v-container fluid>
      <v-row class="section-row">
        <div class="section">
          <power-group></power-group>
        </div>
      </v-row>
      <v-row class="section-row">
        <div class="section">
          <action-menu></action-menu>
        </div>
      </v-row>
      <v-row class="section-row">
        <div class="section">
          <arrow-group></arrow-group>
        </div>
      </v-row>
      <v-row class="section-row">
        <div class="section">
          <action-group></action-group>
        </div>
      </v-row>
      <v-row class="section-row">
        <div class="section">
          <volume-group></volume-group>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ActionGroup from "./components/actions/action-group.vue";
import ActionMenu from "./components/actions/action-menu.vue";
import ArrowGroup from "./components/arrows/arrow-group.vue";
import PowerGroup from "./components/power/power-group.vue";
import VolumeGroup from "./components/volume/volume-group.vue";

export default {
  name: "App",
  components: { ActionGroup, ActionMenu, ArrowGroup, PowerGroup, VolumeGroup },
  data: () => ({
    //
  })
};
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
