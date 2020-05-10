<template>
  <div>
    <ModalCore @clicked="close" />
    <div id="create-desk-modal-container">
      <input v-model="title" placeholder="edit me" />
      <button @click="saveForm" class="btn btn-success">Сохранить</button>
      <button class="btn btn-danger">Закрыть</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalCore from "@/components/modals/Core";
export default {
  components: { ModalCore },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    saveForm() {
      axios.post(
        "http://mytrello_api.com/api/lists/save.php",
        {
          title: this.title,
          desk_id: this.$route.query.id
        },
        { headers: { "Content-type": "application/x-www-form-urlencoded" } }
      );
    },
    close() {
      this.$emit("close-modal");
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