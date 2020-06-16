<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand" >MFE Example</span>
      <div class="float-right text-right">
        <a class="pr-4" href="http://www.cfryerdev-mfe.info/">Home</a>
      </div>
    </nav>
    <div class="bg-secondary p-2">
      Welcome
    </div>
    <div id="app" class="container">
      <LoginForm/>
    </div>
    <div class="text-center p-4">Copyright 2020 - cfryerdev</div>`
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
</style>
