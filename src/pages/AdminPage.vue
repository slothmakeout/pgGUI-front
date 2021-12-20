<template>
    <div class="admin-page container">
        <h1>ADMIN</h1>

        <TasksTable
            v-bind:tasksList="tasksList"
            v-on:fetchTasksList="fetchTasksList"
        />

        <ClientsTable
            v-bind:clientsList="clientsList"
            v-on:fetchClientsList="fetchClientsList"
        />

        <ContactPersonsTable
            v-bind:contactPersonsList="contactPersonsList"
            v-on:fetchContactPersonsList="fetchContactPersonsList"
        />
        <EmployeesTable
            v-bind:employeesList="employeesList"
            v-on:fetchEmployeesList="fetchEmployeesList"
        />
        <SearchClient />
        <CreateReport v-bind:employeesList="employeesList" />
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
import { fetchClientsList } from "@/netClient/dataService";
import { fetchEmployeesList } from "@/netClient/dataService";
import { fetchContactPersonsList } from "@/netClient/dataService";
import { updateTask } from "@/netClient/dataService";
import { createTask } from "@/netClient/dataService";
import TasksTable from "@/components/TasksTable";
import ClientsTable from "@/components/ClientsTable";
import EmployeesTable from "@/components/EmployeesTable";
import ContactPersonsTable from "@/components/ContactPersonsTable";
import SearchClient from "@/components/SearchClient";
import CreateReport from "@/components/CreateReport";
import CreateTaskForm from "@/components/CreateTaskForm";
import UpdateTaskForm2 from "@/components/UpdateTaskForm2";

export default {
    data: () => ({
        visible: {
            tasks: false,
            clients: false,
            contactPersons: false,
            employees: false,
        },
        tasksList: {},
        clientsList: {},
        contactPersonsList: {},
        employeesList: {},
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
        ClientsTable,
        EmployeesTable,
        ContactPersonsTable,
        SearchClient,
        CreateReport,
        UpdateTaskForm2,
        CreateTaskForm,
    },
    created() {
        this.fetchTasksList();
        this.fetchClientsList();
        this.fetchEmployeesList();
        this.fetchContactPersonsList();
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
        async fetchClientsList() {
            try {
                this.clientsList = await fetchClientsList();

                console.log(this.clientsList);
            } catch (error) {
                console.error({ error });
            }
        },
        async fetchEmployeesList() {
            try {
                this.employeesList = await fetchEmployeesList();

                console.log(this.employeesList);
            } catch (error) {
                console.error({ error });
            }
        },
        async fetchContactPersonsList() {
            try {
                console.log("CPCPCPPCPCPCPCPCCP");
                this.contactPersonsList = await fetchContactPersonsList();

                console.log("CP:", this.contactPersonsList);
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