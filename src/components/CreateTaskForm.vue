<template>
    <div>
        <button class="btn btn-primary mt-3" v-on:click="createTaskVisible = !createTaskVisible">
            CREATE TASK
        </button>
        <p>{{visible}}</p>
        <div v-if="createTaskVisible">
            <form @submit.prevent="onFormSubmitCreate" class="mt-3">
                <div class="form-field">

                    <label for="contactPersonName">Contact Person</label>
                    <input
                        v-model="paramsCreate.contactPersonName"
                        id="contactPersonName"
                        type="text"
                        class="form-control"
                        placeholder="Contact Person Name"
                        required
                    />
                    <label for="contractId">ContractId</label>
                    <input
                        v-model="paramsCreate.contractId"
                        id="contractId"
                        type="text"
                        class="form-control"
                        placeholder="Contract Id"
                    />
                    <label for="description">description</label>
                    <input
                        v-model="paramsCreate.description"
                        id="description"
                        type="text"
                        class="form-control"
                        placeholder="Description"
                    />
                    <label for="createdAt">createdAt</label>
                    <input
                        v-model="paramsCreate.createdAt"
                        id="createdAt"
                        type="text"
                        class="form-control"
                        placeholder="Created At"
                        required
                    />
                    <label for="executionTime">executionTime</label>
                    <input
                        v-model="paramsCreate.executionTime"
                        id="executionTime"
                        type="text"
                        class="form-control"
                        placeholder="Execution Time"
                    />
                    <label for="typeId">typeId</label>
                    <input
                        v-model="paramsCreate.typeId"
                        id="typeId"
                        type="text"
                        class="form-control"
                        placeholder="Type id"
                    />
                    <label for="priorityId">priorityId</label>
                    <input
                        v-model="paramsCreate.priorityId"
                        id="priorityId"
                        type="text"
                        class="form-control"
                        placeholder="priority Id"
                        required
                    />
                    <label for="employeeLogin">employeeLogin</label>
                    <input
                        v-model="paramsCreate.employeeLogin"
                        id="employeeLogin"
                        type="text"
                        class="form-control"
                        placeholder="Employee Login"
                        required
                    />
                    <label for="isDone">isDone</label>
                    <input
                        v-model="paramsCreate.isDone"
                        id="isDone"
                        type="text"
                        class="form-control"
                        placeholder="Is done"
                    />
                </div>
                <button class="btn btn-primary mt-3" type="submit">
                    Создать
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UpdateTaskForm2',
    data: () => ({
        createTaskVisible: false,
    }),
    props: ['tasksList','paramsCreate'],
    methods: {
        onFormSubmitCreate() {
            this.$emit("onFormSubmitCreate")
        }
    }
}
</script>