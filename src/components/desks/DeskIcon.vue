<template>
  <!-- <div
    class="desk-icon"
    @click="$router.push({ name: `Desk`, query: { id: $props.obj.id } })"
  >
    {{ obj.title }}
  </div>-->
  <v-card class="info" :to="{ name: `Desk`, query: { id: $props.obj.id } }">
    <v-card-title>{{ obj.title }}</v-card-title>
    <v-card-text></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["obj"]
};
</script>

<style scoped>
.desk-icon {
  /* width: 100px; */
  height: 50px;
  border-radius: 10px;
  align-content: center;
  vertical-align: middle;
  background-color: dodgerblue;
}
</style>
