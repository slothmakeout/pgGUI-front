<template>
    <b-dropdown
            id="dropdown-form"
            text="Update Task"
            ref="dropdown"
            class="m-2"
        >
            <b-dropdown-form @submit.prevent="onFormSubmit">
                
                <b-form-group>
                    <label for="id">Task id</label>
                    <b-form-select
                        class="form-control"
                        name="id"
                        size="sm"
                        v-model="params.id"
                    >
                        <option v-for="task in tasksList" :key="task.id">
                            {{ task.Id }}
                        </option>
                    </b-form-select>
                </b-form-group>

                <b-form-group>
                    <label for="contactPersonName">Contact Person</label>
                    <b-form-input
                        v-model="params.contactPersonName"
                        id="contactPersonName"
                        type="text"
                        class="form-control"
                        placeholder="Contact Person"
                        required
                    />
                </b-form-group>

                <b-form-group>
                    <label for="contractId">ContractId</label>
                    <b-form-input
                        v-model="params.contractId"
                        id="contractId"
                        type="text"
                        class="form-control"
                        placeholder="Contract Id"
                    />
                </b-form-group>

                <b-form-group>
                    <label for="description">description</label>
                    <b-form-input
                        v-model="params.description"
                        id="description"
                        type="text"
                        class="form-control"
                        placeholder="Description"
                    />
                </b-form-group>

                <b-form-group>
                    <label for="createdAt">createdAt</label>
                    <b-form-input
                        v-model="params.createdAt"
                        id="createdAt"
                        type="text"
                        class="form-control"
                        placeholder="Created At"
                        required
                    />
                </b-form-group>

                <b-form-group>
                    <label for="executionTime">executionTime</label>
                    <b-form-input
                        v-model="params.executionTime"
                        id="executionTime"
                        type="text"
                        class="form-control"
                        placeholder="Execution Time"
                    />
                </b-form-group>

                <b-form-group>
                    <label for="typeId">typeId</label>
                    <b-form-input
                        v-model="params.typeId"
                        id="typeId"
                        type="text"
                        class="form-control"
                        placeholder="Type id"
                    />
                </b-form-group>

                <b-form-group>
                    <label for="priorityId">priorityId</label>
                    <b-form-input
                        v-model="params.priorityId"
                        id="priorityId"
                        type="text"
                        class="form-control"
                        placeholder="priority Id"
                        required
                    />
                </b-form-group>

                <b-form-group>
                    <label for="employeeLogin">employeeLogin</label>
                    <b-form-input
                        v-model="params.employeeLogin"
                        id="employeeLogin"
                        type="text"
                        class="form-control"
                        placeholder="Employee Login"
                        required
                    />
                </b-form-group>

                <b-form-group>
                    <label for="isDone">isDone</label>
                    
                    <input
                        v-model="params.isDone"
                        id="isDone"
                        type="text"
                        class="form-control"
                        placeholder="Is done"
                    />
                </b-form-group>

                <b-button type="submit" variant="primary" size="sm" @click="onClick"
                    >Обновить информацию</b-button
                >
            </b-dropdown-form>
        </b-dropdown>
</template>
<script>
export default {
    name: 'UpdateTaskForm',
    props: ['tasksList','params']
}
</script>
