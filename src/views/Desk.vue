<template>
  <div style="height:100vh; width: 100vw">
    <ListsGrid :lists="lists"></ListsGrid>
  </div>
</template>

<script>
// import TaskGrid from "@/components/TaskGrid";
import axios from "axios";
import ListsGrid from "@/components/lists/ListsGrid";
export default {
  data() {
    return { lists: [] };
  },
  components: {
    ListsGrid
  },
  created() {
    this.fetchLists();
  },
  watch: {
    $route() {
      this.fetchLists();
    }
  },
  methods: {
    // todo выходит они дублируются здесь и в listsgrid что нехорошо, поправить
    fetchLists() {
      axios
        .get("http://mytrello_api.com/api/lists/byDesk.php", {
          params: { desk_id: this.$route.query.id }
        })
        .then(response => {
          this.lists = response.data.data;
        });
    }
  }
};
</script>

<style></style>
