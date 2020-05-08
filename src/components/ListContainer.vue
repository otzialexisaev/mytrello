<template>
  <div class="list-container">
    <div class="list-container-title">{{list.title}}</div>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import axios from "axios";
import TaskItem from "@/components/TaskItem";
export default {
  props: ["list"],
  components: { TaskItem },
  data() {
    return {
      tasks: []
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