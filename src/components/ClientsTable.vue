<template>
    <section class="clients-list row">
                <button class="btn btn-outline-secondary mt-3" v-on:click="visible = !visible">CLIENTS TABLE</button>
        <div  v-if="visible">
        <table class="table table-striped table-bordered col-4 mx-auto">
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
                <tr v-for="client in clientsList" :key="client.id">
                    <td v-for="par in client" :key="par">{{par}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
</template>
<script>
export default {
    name: 'clientsTable',
        data: () => ({
        visible: false,
    }),
    props: ['clientsList']
}
</script>
