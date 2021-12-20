<template>
    
    <section class="employees-list row">
                <button class="btn btn-outline-secondary mt-3" v-on:click="visible = !visible">EMPLOYEES TABLE</button>
                <!-- <p>visible {{visible}}</p> -->
        <div  v-if="visible">
        <table class="table table-striped table-bordered col-4 mx-auto">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Role ID</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Login</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employeesList" :key="employee.id">
                    <td v-for="par in employee" :key="par">{{par}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
</template>
<script>
export default {
    name: 'employeesTable',
        data: () => ({
        visible: false,
    }),
    props: ['employeesList']
}
</script>
