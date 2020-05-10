<template>
  <div class="list-container">
    <div class="list-container-title">{{list.title}}</div>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    <button @click="showTaskModal" class="btn btn-light">Добавить задание</button>
    <CreateTaskModal
      @close-modal="closeTaskModal"
      :list_id="$props.list.id"
      v-if="showCreateTaskModal"
    ></CreateTaskModal>
  </div>
</template>

<script>
import axios from "axios";
import TaskItem from "@/components/tasks/TaskItem";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
export default {
  props: ["list"],
  components: { TaskItem, CreateTaskModal },
  data() {
    return {
      tasks: [],
      showCreateTaskModal: false
    };
  },
  methods: {
    fetchTasks() {
      axios
        .get("http://mytrello_api.com/api/tasks/byList.php", {
          params: { list_id: this.$props.list.id }
        })
        .then(response => {
          this.tasks = response.data.data;
        });
    },
    showTaskModal() {
      this.showCreateTaskModal = true;
    },
    closeTaskModal() {
      this.showCreateTaskModal = false;
    }
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style scoped>
.list-container {
  border-radius: 5px;
  background-color: lightblue;
  padding: 10px;
}
</style>