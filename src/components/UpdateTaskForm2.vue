<template>
    <div>
        <button class="btn btn-primary mt-3" v-on:click="visible = !visible">UPD TASK</button>
        <div  v-if="visible">
        <form @submit.prevent="onFormSubmit" class="mt-3">
            <div class="form-field">
                <label for="id">Task id</label>
                <select class="form-control" name="id" v-model="params.id" required>
                    <option v-for="task in tasksList" :key="task.id">
                        {{ task.Id }}
                    </option>
                </select>
                <label for="ontactPersonName">Contact Person</label>
                <input
                    v-model="params.contactPersonName"
                    id="contactPersonName"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Name"

                />
                <label for="contractId">ContractId</label>
                <input
                    v-model="params.contractId"
                    id="contractId"
                    type="text"
                    class="form-control"
                    placeholder="Contract Id"
                />
                <label for="description">description</label>
                <input
                    v-model="params.description"
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="Description"
                />
                <label for="createdAt">createdAt</label>
                <input
                    v-model="params.createdAt"
                    id="createdAt"
                    type="text"
                    class="form-control"
                    placeholder="Created At"
                />
                <label for="executionTime">executionTime</label>
                <input
                    v-model="params.executionTime"
                    id="executionTime"
                    type="text"
                    class="form-control"
                    placeholder="Execution Time"
                />
                <label for="typeId">typeId</label>
                <input
                    v-model="params.typeId"
                    id="typeId"
                    type="text"
                    class="form-control"
                    placeholder="Type id"
                />
                <label for="priorityId">priorityId</label>
                <input
                    v-model="params.priorityId"
                    id="priorityId"
                    type="text"
                    class="form-control"
                    placeholder="priority Id"
                />
                <label for="employeeLogin">employeeLogin</label>
                <input
                    v-model="params.employeeLogin"
                    id="employeeLogin"
                    type="text"
                    class="form-control"
                    placeholder="Employee Login"
                />
                <label for="isDone">isDone</label>
                <input
                    v-model="params.isDone"
                    id="isDone"
                    type="text"
                    class="form-control"
                    placeholder="Is done"
                />
            </div>
                  <button class="btn btn-primary mt-3" type="submit">Изменить</button>
        </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UpdateTaskForm2',
        data: () => ({
        visible: false,
    }),
    props: ['tasksList','params'],
    methods: {
        onFormSubmit() {
            this.$emit("onFormSubmit")
        }
    }

}
</script>
