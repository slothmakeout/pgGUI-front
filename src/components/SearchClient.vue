<template>
    <div>
        <button
            class="btn btn-primary mt-3"
            v-on:click="visible.form = !visible.form"
        >
            SEARCH CLIENT
        </button>
        <div v-if="visible.form">
            <form @submit.prevent="searchClient" class="mt-3">
                <div class="form-field">
                    <label for="contactPersonName">Contact Person</label>
                    <input
                        v-model="name"
                        id="contactPersonName"
                        type="text"
                        class="form-control"
                        placeholder="Contact Person Name"
                    />
                </div>
                <button
                    class="btn btn-primary mt-3"
                    type="submit"
                    v-on:click="visible.table = !visible.table"
                >
                    Поиск
                </button>
            </form>
            <div>
                <section class="clients-list row">
                    <div v-if="visible.table">
                        <table
                            class="
                                table table-striped table-bordered
                                col-4
                                mx-auto
                            "
                        >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Company Name</th>
                                    <th>Status</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Fax</th>
                                    <th>Postal Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ client.id }}</td>
                                    <td>{{ client.companyName }}</td>
                                    <td>{{ client.status }}</td>
                                    <td>{{ client.email }}</td>
                                    <td>{{ client.phone }}</td>
                                    <td>{{ client.fax }}</td>
                                    <td>{{ client.postalAddress }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import { searchClient } from "@/netClient/dataService";

export default {
    data: () => ({
        visibleform: false,
        visible: {
            form: false,
            table: false,
        },
        client: {},
        name: "",
    }),
    props: [""],
    methods: {
        async searchClient() {
            try {
                this.client = await searchClient(this.name);
                console.log(this.client);
            } catch (error) {
                console.error({ error });
            }
        },
    },
};
</script>