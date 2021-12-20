<template>
  <div class='form-section mt-5'>
    <div class='container'>
      <div class ='row'>
        <div class='col-5 mx-auto'>
          <div class='card'>
            <div class='card-body'>
            <h5 class='card-title'>Registration</h5>
            <form @submit.prevent="onFormSubmit" class="mt-3">
                <div class="form-field">
                    <label for="email">Почта</label>
                    <input v-model="email" id="email" class='form-control' type="text" placeholder='Email' required />
                </div>
                <div class="form-field">
                    <label for="phone" class='mt-3'>Телефон</label>
                    <input v-model="phone" id="phone" class='form-control' type="text" placeholder='+8 (xxx) xxx-xx-xx'>
                </div>
                <div class="form-field">
                    <label for="login" class='mt-3'>Логин</label>
                    <input v-model="login" id="login" class='form-control' type="text" placeholder="Login" required />
                </div>
                <p class='mt-3'>Role:</p>
                <div class='row'>
                    <input
                        type="radio"
                        id="roleChoice1"
                        v-model="roleId"
                        value="1"
                    />
                    <label for="roleChoice1">worker</label>

                    <input
                        type="radio"
                        id="roleChoice2"
                        v-model="roleId"
                        value="2"
                    />
                    <label for="roleChoice2">manager</label>

                    <input
                        type="radio"
                        id="roleChoice3"
                        v-model="roleId"
                        value="3"
                    />
                    <label for="roleChoice3">admin</label>

                    <!-- <span>Выбрано: {{ roleId }}</span> -->
                </div>
                <div class="form-field">
                    <label for="password" class='mt-3'>Пароль</label>
                    <input v-model="password" id="password" class='form-control' type="text" placeholder="Password" required />
                </div>

                <button class="submit-btn btn btn-primary mt-3" type="submit">Регистрация</button>
                <div class="action-link">
                    <span>Уже есть аккаунт?</span>
                    <a @click="redirect" class="link-btn">Войти</a>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doRegister } from "@/netClient/dataService";

export default {
    name: "RegistrationPage",
    data: () => ({
        email: "",
        phone: "",
        login: "",
        password: "",
        roleId: "",
    }),
    async mounted() {},
    methods: {
        redirect() {
            this.$router.push("/login");
        },
        async onFormSubmit() {
            try {
                const data = await doRegister(
                    this.email.trim(),
                    this.phone.trim(),
                    this.login.trim(),
                    this.roleId.trim(),
                    this.password.trim()
                );
                console.warn(data);
            } catch (error) {
                console.error({ error });
                throw error;
            }
            this.$router.push("/login");
            console.log("READY TO GO ON LOGIN PAGE");
        },
    },
};
</script>

<style>
</style>