<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="input.username"
      >
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <br>
    <button type="button" v-on:click="login()" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
import { state } from "cfryerdev-dfe-utility-cookiestate";
export default {
  name: "LoginForm",
  data() {
      return {
          input: {
              username: ""
          }
      }
  },
  methods: {
      login() {
          if(this.input.username != "") {
              var id = state.getId("DFE-EXAMPLE");
              state.appendState(id, "user", { username:this.input.username } );
          } else {
              alert("A username and password must be present");
          }
      },
      init() {
        var id = state.getId("DFE-EXAMPLE");
        var userState = state.getStateElement(id, "user");
        if (userState !== undefined) {
          this.input.username = userState.username;
        }
      }
  },
  mounted(){
    this.init()
  }
};
</script>