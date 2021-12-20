<template>
  <div class='form-section mt-5'>
    <div class='container'>
      <div class ='row'>
        <div class='col-5 mx-auto'>
          <div class='card'>
            <div class='card-body'>
            <h2 class='card-title'>LOGIN</h2>
              <form @submit.prevent="onFormSubmit" class="mt-3">
                <div class="form-field">
                  <label for="login">Login</label>
                  <input v-model="login" id="login" type="text" class='form-control' placeholder="Login" required />
                </div>
                <div class="form-field">
                  <label for="password">Пароль</label>
                  <input v-model="password" id="password" type="text" class='form-control' placeholder="Password" required />
                </div>
                <button class="btn btn-primary mt-3" type="submit">Войти</button>
                <div class="action-link">
                  <span>Нет аккаунта?</span>
                  <a @click="redirect" class="link-btn">Зарегистрироваться</a>
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
import { doLogin } from "@/netClient/dataService";

export default {
  name: "LoginPage",
  data: () => ({
    login: '',
    password: ''
  }),
  async mounted() {},
  methods: {
    redirect() {
      this.$router.push("/registration");
    },
    async onFormSubmit() {
      try {
        const role = await doLogin(
          this.login.trim(),
          this.password.trim(),
        );
        console.log("READY TO GO. role:", role)
        console.warn(role)
        if(role == "Worker") {
                this.$router.push("/worker");
        } else if (role == "Manager") {
          this.$router.push("/Manager")
        } else if (role == "Admin") {
          this.$router.push("/Admin")
        }
      } catch (error) {
        console.error({error})
      }
    }
  }
}
</script>

<style>
</style>