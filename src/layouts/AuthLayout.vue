<template>
  <div class="auth-layout">
    <div class="page-title">
      <h1>AUTH PAGE</h1>
    </div>
    <div class="page-container">
      <router-view />
      <!-- Рендерится loginpage или registrationpage -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style scoped>
/* .auth-layout {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
} */
</style>
