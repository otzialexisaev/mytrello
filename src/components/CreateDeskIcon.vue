<template>
  <div id="desk-icon-create">
    <div @click="showHideCreateModul" id="desk-icon-create-clicker">Добавить доску</div>
    <CreateDeskModul v-show="showCreateModul" />
  </div>
</template>

<script>
import CreateDeskModul from "@/components/CreateDeskModul";
export default {
  methods: {
    showHideCreateModul() {
      this.showCreateModul = !this.showCreateModul;
    }
  },
  data() {
    return {
      showCreateModul: false
    };
  },
  props: ["obj"],
  components: { CreateDeskModul }
};
</script>

<style scoped>
#desk-icon-create {
  /* width: 100px; */
  height: 50px;
  border-radius: 10px;
  align-content: center;
  vertical-align: middle;
  background-color: gray;
  overflow: hidden;
}
#desk-icon-create-clicker {
  width: 100%;
  height: 100%;
}
</style>
