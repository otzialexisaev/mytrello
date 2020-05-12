<template>
  <div>
    <!-- <ModalCore @clicked="close" />
    <div id="create-desk-modal-container">
      <input v-model="title" placeholder="edit me" />
      <button @click="saveForm" class="btn btn-success">Сохранить</button>
      <button class="btn btn-danger">Закрыть</button>
    </div>-->

    <v-dialog @input="close" v-model="display" max-width="290">
      <v-card
        class="mx-auto"
        color="#26c6da"
        dark
        max-width="400"
        :elevation="24"
        style="z-index: 101;"
      >
        <v-card-title>
          <h1 class="headline font-weight-bold">Добавить доску</h1>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="title" label="Название" outlined></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="close" color="error darken-1" raised tile>Закрыть</v-btn>
          <v-spacer></v-spacer>

          <v-btn
            :loading="isLoading ? true : false"
            @click="saveForm"
            color="green darken-1"
            raised
            tile
          >Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
// import ModalCore from "@/components/modals/Core";
export default {
  // components: { ModalCore },
  props: ["show"],
  data() {
    return {
      title: "",
      isLoading: false
    };
  },
  computed: {
    display: {
      get: function() {
        return this.$props.show;
      },
      set: function() {
        return;
      }
    }
  },
  methods: {
    saveForm(context) {
      this.isLoading = true;
      axios
        .post(
          "http://mytrello_api.com/api/desks/save.php",
          {
            title: this.title
          },
          { headers: { "Content-type": "application/x-www-form-urlencoded" } }
        )
        .then(() => {
          this.close(context, true);
        });
    },
    close(context, reload) {
      this.$emit("close-dialog", reload);
    }
  }
};
</script>

<style scoped>
#create-desk-modal-container {
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