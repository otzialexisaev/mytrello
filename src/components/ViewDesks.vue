<template>
  <div class="desk-icon-grid">
    <div :key="desk.id" v-for="desk in desks">
      <DeskIcon :obj="desk"></DeskIcon>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DeskIcon from "@/components/DeskIcon";
export default {
  props: ["desks"],
  computed: {
    // сейчас есть затычки в сторе, сделаю пока без стора, убрать потом отсюда и из стора
    // desks() {
    //   return this.$store.state.desks;
    // },
  },
  components: { DeskIcon },
  methods: {
    ...mapActions(["fetchDesks"]),
  },
  created() {
    console.log(12341241234);

    this.fetchDesks();
  },
};
</script>

<style scoped>
.desk-icon-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
}
</style>
