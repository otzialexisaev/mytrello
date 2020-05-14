<template>
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
        <h1 class="headline font-weight-bold">Добавить задание</h1>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="title" label="Название" outlined></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn :loading="isLoading" @click="close" color="error darken-1" raised tile>Закрыть</v-btn>
        <v-spacer></v-spacer>

        <v-btn :loading="isLoading" @click="saveForm" color="green darken-1" raised tile>Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
// import ModalCore from "@/components/modals/Core";
export default {
  // components: { ModalCore },
  props: ["list_id", "show"],
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

  data() {
    return {
      title: "",
      isLoading: false
    };
  },
  methods: {
    saveForm() {
      this.isLoading = true;
      axios
        .post(
          "http://mytrello_api.com/api/tasks/save.php",
          {
            title: this.title,
            list_id: this.$props.list_id
          },
          { headers: { "Content-type": "application/x-www-form-urlencoded" } }
        )
        .then(() => {
          this.close(true);
        })
        .catch(err => {
          console.error(err);
        });
    },
    close(reload) {
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
