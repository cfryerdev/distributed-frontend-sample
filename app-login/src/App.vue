<template>
  <div id="app" class="container">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";

export default {
  name: "App",
  components: {
    LoginForm
  }
};
</script>

<style>
@import './styles/bootstrap.css';
@import './styles/main.css';
#app {
  margin-top: 60px;
}
</style>
