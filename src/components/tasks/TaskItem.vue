<template>
  <div class="list-item">{{task.title}}</div>
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