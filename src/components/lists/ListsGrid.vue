<template>
  <!-- <div id="lists-grid"> -->
  <div>
    <v-container class="grey lighten-5 mb-6">
      <v-row align="start" justify="start" no-gutters style="height: 150px;">
        <v-col v-for="list in $props.lists" :key="list.id">
          <ListContainer :list="list"></ListContainer>
        </v-col>

        <div @click="showHideModal">
          <div class="list-icon-create">Добавить лист</div>
        </div>
      </v-row>
      <CreateListModal
        @close-modal="closeModal"
        v-if="showModal"
      ></CreateListModal>
    </v-container>
  </div>
  <!-- </div> -->
</template>

<script>
import ListContainer from "@/components/lists/ListContainer";
import CreateListModal from "@/components/modals/CreateListModal";
export default {
  props: ["lists"],
  components: {
    ListContainer,
    CreateListModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showHideModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
  },
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
