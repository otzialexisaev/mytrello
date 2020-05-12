<template>
  <div class="desk-icon-grid">
    <DeskIcon :obj="desk" :key="desk.id" v-for="desk in desks"></DeskIcon>
    <div @click="showHideCreateModal">
      <v-card class="grey lighten-3">
        <v-card-title>Добавить доску</v-card-title>
        <v-card-text></v-card-text>
      </v-card>
    </div>
    <CreateDeskModal
      :show="showCreateDeskModal"
      @close-dialog="closeCreateDeskDialog"
      v-if="showCreateDeskModal"
    />
  </div>
</template>

<script>
import axios from "axios";
import DeskIcon from "@/components/desks/DeskIcon";
import CreateDeskModal from "@/components/modals/CreateDeskModal";
export default {
  components: { DeskIcon, CreateDeskModal },
  data() {
    return {
      showCreateDeskModal: false,
      desks: []
    };
  },
  methods: {
    showHideCreateModal() {
      this.showCreateDeskModal = !this.showCreateDeskModal;
    },
    closeCreateDeskDialog(reload) {
      if (reload) this.fetchDesks();
      this.showCreateDeskModal = false;
    },
    fetchDesks() {
      axios.get("http://mytrello_api.com/api/desks/get.php").then(response => {
        this.desks = response.data;
      });
    }
  },
  created() {
    this.fetchDesks();
  }
};
</script>

<style scoped>
.desk-icon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
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
