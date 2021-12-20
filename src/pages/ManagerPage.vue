<template>
    <div class="manager-page container">
        <h1>MANAGER</h1>

        <TasksTable
            v-bind:tasksList="tasksList"
            v-on:fetchTasksList="fetchTasksList"
        />
        <UpdateTaskForm2
            v-bind:tasksList="tasksList"
            v-bind:params="params"
            @onFormSubmit="onFormSubmit"
        />

        <CreateTaskForm
            v-bind:tasksList="tasksList"
            v-bind:paramsCreate="paramsCreate"
            @onFormSubmitCreate="onFormSubmitCreate"
        />
    </div>
</template>

<script>
import { fetchTasksList } from "@/netClient/dataService";
import { updateTask } from "@/netClient/dataService";
import { createTask } from "@/netClient/dataService";
import TasksTable from "@/components/TasksTable";
import CreateTaskForm from "@/components/CreateTaskForm";
import UpdateTaskForm2 from "@/components/UpdateTaskForm2";
export default {
    name: "HomePage",
    data: () => ({
        tasksList: {},
        params: {
            id: "",
            contactPersonName: "",
            contractId: "",
            description: "",
            createdAt: "",
            executionTime: "",
            typeId: "",
            priorityId: "",
            isDone: null,
            employeeLogin: "",
        },
        paramsCreate: {
            contactPersonName: "",
            contractId: "",
            description: "",
            createdAt: "",
            executionTime: "",
            typeId: "",
            priorityId: "",
            isDone: null,
            employeeLogin: "",
        },
    }),
    components: {
        TasksTable,
        // UpdateTaskForm,
        UpdateTaskForm2,
        CreateTaskForm,
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
            for (const key in this.params) {
                let el = this.params[key];
                if (el == "") {
                    console.warn(key, "IS EMPTY");
                    this.params[key] = null;
                } else if (el != "" && el != null) {
                    this.params[key] = this.params[key].trim();
                }
            }
            for (const key in this.params) {
                let el = this.params[key];
                console.log(el);
            }
            try {
                await updateTask(
                    this.params.id.trim(),
                    this.params.contactPersonName.trim(),
                    this.params.contractId,
                    this.params.description,
                    this.params.createdAt.trim(),
                    this.params.executionTime,
                    this.params.typeId.trim(),
                    this.params.priorityId.trim(),
                    this.params.isDone,
                    this.params.employeeLogin.trim()
                );
                this.fetchTasksList();
            } catch (error) {
                console.error({ error });
            }
        },
        async onFormSubmitCreate() {
            for (const key in this.paramsCreate) {
                let el = this.paramsCreate[key];
                if (el == "") {
                    console.warn(key, "IS EMPTY");
                    this.paramsCreate[key] = null;
                } else if (el != "" && el != null) {
                    this.paramsCreate[key] = this.paramsCreate[key].trim();
                }
            }
            for (const key in this.paramsCreate) {
                let el = this.paramsCreate[key];
                console.log(el);
            }
            try {
                await createTask(
                    this.paramsCreate.contactPersonName,
                    this.paramsCreate.contractId,
                    this.paramsCreate.description,
                    this.paramsCreate.createdAt,
                    this.paramsCreate.executionTime,
                    this.paramsCreate.typeId,
                    this.paramsCreate.priorityId,
                    this.paramsCreate.isDone,
                    this.paramsCreate.employeeLogin
                );
                this.fetchTasksList();
            } catch (error) {
                console.error({ error });
            }
        },
    },
};
</script>
