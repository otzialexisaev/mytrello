<template>
  <ViewDesks :desks="desks"></ViewDesks>
</template>

<script>
import axios from "axios";
import ViewDesks from "@/components/ViewDesks";
export default {
  components: {
    ViewDesks,
  },
  data() {
    return {
      desks: [],
    };
  },
  methods: {
    fetchDesks() {
      axios
        .get("http://mytrello_api.com/api/desks/get.php")
        .then((response) => {
          console.log(response);

          this.desks = response.data;
        });
    },
  },
  created() {
    this.fetchDesks();
  },
};
</script>

<style></style>
