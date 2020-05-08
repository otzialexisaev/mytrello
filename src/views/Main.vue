<template>
  <DesksGrid :desks="desks"></DesksGrid>
</template>

<script>
import axios from "axios";
import DesksGrid from "@/components/DesksGrid";
export default {
  components: {
    DesksGrid
  },
  data() {
    return {
      desks: []
    };
  },
  methods: {
    fetchDesks() {
      axios.get("http://mytrello_api.com/api/desks/get.php").then(response => {
        this.desks = response.data;
      });
    }
  },
  created() {
    this.fetchDesks();
  }
};
</script>

<style></style>
