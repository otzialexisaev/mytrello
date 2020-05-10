<template>
  <v-card color="red" elevation="5" width="300px">
    <!-- <div class="list-container"> -->
    <!-- <div class="list-container-title">{{ list.title }}</div> -->
    <v-card-title>{{ list.title }}</v-card-title>
    <v-card-text>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click.stop="showTaskModal" class="btn btn-light">
        Добавить задание
      </v-btn>
    </v-card-actions>
    <CreateTaskModal
      @close-dialog="closeTaskModal"
      :show="showCreateTaskModal"
      :list_id="$props.list.id"
    ></CreateTaskModal>
    <!-- </div> -->
  </v-card>
</template>

<script>
import axios from "axios";
import TaskItem from "@/components/tasks/TaskItem";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
export default {
  props: ["list"],
  components: {
    TaskItem,
    CreateTaskModal,
  },
  data() {
    return {
      tasks: [],
      showCreateTaskModal: false,
    };
  },
  methods: {
    fetchTasks() {
      axios
        .get("http://mytrello_api.com/api/tasks/byList.php", {
          params: { list_id: this.$props.list.id },
        })
        .then((response) => {
          this.tasks = response.data.data;
        });
    },
    showTaskModal() {
      this.showCreateTaskModal = true;
    },
    closeTaskModal() {
      this.showCreateTaskModal = false;
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
.list-container {
  border-radius: 5px;
  background-color: lightblue;
  padding: 10px;
}
</style>
