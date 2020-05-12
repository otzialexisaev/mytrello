<template>
  <!-- <div id="lists-grid"> -->
  <div class="list-grid d-flex flex-nowrap align-start" style="height: 100%; overflow-x: auto">
    <!-- <v-container>
      <v-row align="start" justify="start" no-gutters style="height: 150px;">
        <v-col v-for="list in $props.lists" :key="list.id">
    <ListContainer :list="list"></ListContainer>-->
    <ListContainer v-for="list in $props.lists" :key="list.id" :list="list"></ListContainer>
    <!-- <v-col> -->
    <div class="list-container-wrapper">
      <div v-if="!createListFormShown" @click="showCreateListForm">
        <v-card elevation="5" style="width:300px" class="grey lighten-3">
          <v-card-title>Добавить лист</v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </div>
      <div v-if="createListFormShown" id="create-list-form">
        <v-card elevation="5" style="width:300px">
          <v-card-text>
            <v-text-field v-model="newListTitle" label="Название" outlined></v-text-field>
            <v-btn
              :loading="createListFormIsLoading ? true : false"
              @click="saveNewList"
              color="green darken-1"
              tile
            >Сохранить</v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <!-- </v-col>
      </v-row>
      <CreateListModal @close-modal="closeModal" v-if="showModal"></CreateListModal>
    </v-container>-->
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import ListContainer from "@/components/lists/ListContainer";
export default {
  props: ["lists"],
  components: {
    ListContainer
  },
  data() {
    return {
      createListFormIsLoading: false,
      newListTitle: "",
      createListFormShown: false,
      showModal: false
    };
  },
  methods: {
    showCreateListForm() {
      this.createListFormShown = true;
      this.addHidingOnClickOutside();
    },
    hideCreateListForm() {
      this.createListFormShown = false;
    },
    addHidingOnClickOutside() {
      const outsideClickListener = event => {
        let element = document.getElementById("create-list-form");

        if (!element.contains(event.target) && this.isVisible(element)) {
          this.hideCreateListForm();
          removeClickListener();
        }
      };

      const removeClickListener = () => {
        document.removeEventListener("click", outsideClickListener);
      };

      document.addEventListener("click", outsideClickListener);
    },
    isVisible(elem) {
      return (
        !!elem &&
        !!(
          elem.offsetWidth ||
          elem.offsetHeight ||
          elem.getClientRects().length
        )
      );
    },
    saveNewList() {
      if (this.newListTitle !== "") {
        this.createListFormIsLoading = true;
        axios
          .post(
            "http://mytrello_api.com/api/lists/save.php",
            {
              title: this.newListTitle,
              desk_id: this.$route.query.id
            },
            { headers: { "Content-type": "application/x-www-form-urlencoded" } }
          )
          .then(() => {
            this.createListFormIsLoading = false;
          });
      }
    },
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

<style>
#create-list-form {
  width: 300px;
}
.list-grid {
  padding: 5px;
}
</style>
