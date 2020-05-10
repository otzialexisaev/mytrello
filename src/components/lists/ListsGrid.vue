<template>
  <div id="lists-grid">
    <ListContainer :key="list.id" v-for="list in $props.lists" :list="list"></ListContainer>
    <div @click="showHideModal">
      <div class="list-icon-create">Добавить лист</div>
    </div>
    <CreateListModal @close-modal="closeModal" v-if="showModal"></CreateListModal>
  </div>
</template>

<script>
import ListContainer from "@/components/lists/ListContainer";
import CreateListModal from "@/components/modals/CreateListModal";
export default {
  props: ["lists"],
  components: {
    ListContainer,
    CreateListModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    showHideModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    }
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
.list-icon-create {
  /* width: 100px; */
  height: 50px;
  border-radius: 10px;
  align-content: center;
  vertical-align: middle;
  background-color: gray;
  overflow: hidden;
}
</style>
