<template>
    <div class="worker-page container">
        <h1>WORKER</h1>
        <TasksTable
            v-bind:tasksList="tasksList"
        />
        
        <form @submit.prevent="onFormSubmit" class="mt-3">
            <div class="form-field">
                <label for="login">Изменить задание</label>
                <input
                    v-model="id"
                    id="taskId"
                    type="text"
                    class="form-control"
                    placeholder="ID"
                    required
                />
            </div>
            <button class="btn btn-primary mt-3" type="submit">
                Отметить как выполненное
            </button>
            <span>{{ id }}</span>
        </form>
    </div>
</template>

<script>
import { fetchTasksList } from "@/netClient/dataService";
import { completeTask } from "@/netClient/dataService";
import TasksTable from "@/components/TasksTable";
export default {
    name: "HomePage",
    data: () => ({
        tasksList: {},
        id: "",
    }),
    components: {
        TasksTable,
    },
    created() {
        this.fetchTasksList();
    },
    methods: {
        async fetchTasksList() {
            try {
                this.tasksList = await fetchTasksList();

                console.log(
                    this.tasksList,
                    typeof this.tasksList,
                    this.tasksList
                );
            } catch (error) {
                console.error({ error });
            }
        },
        async onFormSubmit() {
            console.log(this.id.trim());
            try {
                await completeTask(this.id.trim());
            } catch (error) {
                console.error({ error });
            }
        },
    },
};
</script>
