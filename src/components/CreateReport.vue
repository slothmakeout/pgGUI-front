<template>
    <div>
        <button
            class="btn btn-primary mt-3"
            v-on:click="visible.form = !visible.form"
        >
            MAKE A REPORT
        </button>
        <div v-if="visible.form">
            <form @submit.prevent="report" class="mt-3">
                <div class="form-field">
                    <label for="id">Task id</label>
                    <select
                        class="form-control"
                        name="id"
                        v-model="par.id"
                        required
                    >
                        <option v-for="emp in employeesList" :key="emp.id">
                            {{ emp.id }}
                        </option>
                    </select>
                    <label for="dateStart">Start Date</label>
                    <input
                        v-model="par.dateStart"
                        id="dateStart"
                        type="text"
                        class="form-control"
                        placeholder="Start Date"
                    />
                    <label for="dateEnd">End Date</label>
                    <input
                        v-model="par.dateEnd"
                        id="dateEnd"
                        type="text"
                        class="form-control"
                        placeholder="End Date"
                    />
                </div>
                <button class="btn btn-primary mt-3" type="submit">
                    MAKE A REPORT
                </button>
            </form>
            <p>{{res}}</p>
        </div>
    </div>
</template>
<script>
import { report } from "@/netClient/dataService";

export default {
    data: () => ({
        visible: {
            form: false,
        },
        client: {},
        par: {
            id:"",
            startDate:"",
            endDate:"",
        },
        res: ""
    }),
    props: ["employeesList"],
    methods: {
        async report() {
            try {
                this.res = await report(this.name);
            } catch (error) {
                console.error({ error });
            }
        },
    },
};
</script>