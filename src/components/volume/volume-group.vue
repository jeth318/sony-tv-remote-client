<template>
    <div class="volume-control-wrapper">
      <remote-button icon="volume-minus" color="blue" irccKey="VolumeDown"></remote-button>
      <remote-button icon="volume-mute" color="grey" irccKey="Mute"></remote-button>
      <remote-button icon="volume-plus" color="blue" irccKey="VolumeUp"></remote-button>
    </div>
</template>

<script>
import RemoteButton from "../remote-button.vue";
export default {
  components: { RemoteButton }
};
</script>

<style>
.volume-control-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
}

.volume-control-wrapper > button:first-child {
  margin-bottom: 10px;
}

</style>