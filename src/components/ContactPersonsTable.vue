<template>
    <section class="contactPersons-list row">
        <button
            class="btn btn-outline-secondary mt-3"
            v-on:click="visible = !visible"
        >
            CONTACT PERSONS TABLE
        </button>
        <div v-if="visible">
            <table class="table table-striped table-bordered col-4 mx-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Fax</th>
                        <th>Postal Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cp in contactPersonsList" :key="cp.id">
                        <td v-for="par in cp" :key="par">{{ par }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
export default {
    name: "contactPersonsTable",
    data: () => ({
        visible: false,
    }),
    props: ["contactPersonsList"],
};
</script>
