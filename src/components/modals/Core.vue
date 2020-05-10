<template>
  <div id="create-desk-modal-darkbg" @click="$emit('clicked')">
    <div id="create-desk-modal-wrapper"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#create-desk-modal-darkbg {
  background: gray;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100000;
  opacity: 0.5;
}

#create-desk-modal-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>