<template>
  <div class="desk-icon-grid">
    <DeskIcon :obj="desk" :key="desk.id" v-for="desk in desks"></DeskIcon>
    <CreateDeskIcon></CreateDeskIcon>
  </div>
</template>

<script>
import DeskIcon from "@/components/DeskIcon";
import CreateDeskIcon from "@/components/CreateDeskIcon";
export default {
  props: ["desks"],
  components: { DeskIcon, CreateDeskIcon }
};
</script>

<style scoped>
.desk-icon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}
</style>
