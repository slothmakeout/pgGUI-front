<template>
  <div class='home-page'>
    <section class='create-todo'>
      <!--  -->
    </section>
    <section class='todo-list'>
      <h1>HOME PAGE</h1>
      <ul>
        <li v-for="todoItem in todoList" :key="todoItem.id">
          <div class="title">
            {{todoItem.title}}
          </div>
          <div class="checkbox">
            <input type="checkbox" :checked="todoItem.isCompleted">
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList } from "@/netClient/dataService";
export default {
  name: "HomePage",
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
        console.log(this.todoList, typeof this.todoList)
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
