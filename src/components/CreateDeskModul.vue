<template>
  <div>
    <ModulCore @click="close" />
    <div id="create-desk-modul-container"></div>
  </div>
</template>

<script>
import ModulCore from "@/components/modul/Core";
export default {
  components: { ModulCore },
  methods: {
    close() {
      this.$emit("closeModul");
    }
  }
};
</script>

<style scoped>
#create-desk-modul-container {
  position: fixed;
  width: 70%;
  padding: 40px;
  max-height: 70%;
  background: #5d7ada;
  top: 15vh;
  z-index: 100001;
  border-radius: 10px;
  margin: auto;
  display: flex;
  min-width: 300px;
  max-width: 800px;
  left: 0px;
  right: 0px;
}
</style>