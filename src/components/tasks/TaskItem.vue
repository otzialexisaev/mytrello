<template>
  <v-card outlined tile>
    <v-card-text class="pa-2 text--primary">{{ task.title }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["task"]
};
</script>

<style scoped>
.list-item {
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightgray;
}
</style>
