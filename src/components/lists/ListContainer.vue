<template>
  <div class="list-container-wrapper">
    <v-card class="list-container" color="red" elevation="5">
      <v-card-title>{{ list.title }}</v-card-title>
      <v-card-text>
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
      </v-card-text>
      <v-card-actions>
        <v-btn @click.stop="showTaskModal" class="btn btn-light">Добавить задание</v-btn>
      </v-card-actions>
      <CreateTaskModal
        v-if="showCreateTaskModal"
        @close-dialog="closeTaskModal"
        :show="showCreateTaskModal"
        :list_id="$props.list.id"
      ></CreateTaskModal>
      <!-- </div> -->
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import TaskItem from "@/components/tasks/TaskItem";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
export default {
  props: ["list"],
  components: {
    TaskItem,
    CreateTaskModal
  },
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
    closeTaskModal(reload) {
      if (reload === true) this.fetchTasks();
      this.showCreateTaskModal = false;
    }
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style>
.list-container {
  overflow-y: auto;
  max-height: 100%;
}
.list-container-wrapper {
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  display: inline-block;
  margin: 0px 5px;
}
.list-container-wrapper:first-child {
  margin: 0px 5px 0px 0px;
}
.list-container-wrapper:last-child {
  margin: 0px 0px 0px 5px;
}
</style>
