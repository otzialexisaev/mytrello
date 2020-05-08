<template>
  <div>
    <ListsGrid></ListsGrid>
  </div>
</template>

<script>
// import TaskGrid from "@/components/TaskGrid";
import ListsGrid from "@/components/ListsGrid";
export default {
  components: {
    ListsGrid,
  },
  computed: {
    tasks() {
      return this.fetchLists();
    },
  },
  methods: {
    fetchLists() {
      return [];
    },
  },
};
</script>

<style></style>
