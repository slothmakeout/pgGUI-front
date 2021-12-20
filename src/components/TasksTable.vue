<template>
    <section class="tasks-list row">
        <button
            class="btn btn-outline-secondary mt-3"
            v-on:click="visible = !visible"
        >
            TASK TABLE
        </button>
        <div v-if="visible">
            <table class="table table-striped table-bordered col-4 mx-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ContactPerson</th>
                        <th>ContractId</th>
                        <th>Description</th>
                        <th>CreatedAt</th>
                        <th>ExecutionTime</th>
                        <th>CompletedAt</th>
                        <th>Type</th>
                        <th>Priority</th>
                        <th>IsDone</th>
                        <th>Creator</th>
                        <th>Executor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasksList" :key="task.id">
                        <td>{{ task.Id }}</td>
                        <td>{{ task.ContactPersonName }}</td>
                        <td>{{ task.ContractId }}</td>
                        <td>{{ task.Description }}</td>
                        <td>{{ task.CreatedAt }}</td>
                        <td>{{ task.ExecutionTime }}</td>
                        <td>{{ task.CompletedAt }}</td>
                        <td>{{ task.TypeId }}</td>
                        <td>{{ task.PriorityId }}</td>
                        <td>{{ task.IsDone }}</td>
                        <td>{{ task.CreatorLogin }}</td>
                        <td>{{ task.ExecutorLogin }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
export default {
    name: "TasksTable",
    data: () => ({
        visible: false,
    }),
    props: ["tasksList"],
};
</script>
