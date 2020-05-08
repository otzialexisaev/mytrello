<template>
  <div id="lists-grid">
    <ListContainer :key="list.id" v-for="list in $props.lists" :list="list"></ListContainer>
  </div>
</template>

<script>
import ListContainer from "@/components/ListContainer";
export default {
  props: ["lists"],
  components: {
    ListContainer
  }
};
// todo сделать один стиль для гридов
</script>

<style scoped>
#lists-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
}
</style>
