<template>
  <div>
    <div class="form-group" v-if="this.input.loggedInUser === ''">
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
    <label v-if="this.input.loggedInUser !== ''" class="text-danger pb-3">
      Currently logged in as {{this.input.loggedInUser || ""}}
      <span v-if="this.input.isLoginTrigger"> ... Redirecting... </span>
    </label>
    <br>
    <button v-if="this.input.loggedInUser === ''" type="button" v-on:click="login()" class="btn btn-primary">
      Login
    </button>
    <button v-if="this.input.loggedInUser !== ''" type="button" v-on:click="logout()" class="btn btn-secondary">
      Logout
    </button>
  </div>
</template>

<script>
import { state, cookies } from "cfryerdev-dfe-utility-cookiestate";
export default {
  name: "LoginForm",
  data() {
      return {
          input: {
              username: "",
              loggedInUser: "",
              isLoginTrigger: false
          }
      }
  },
  methods: {
      login() {
          if(this.input.username != "") {
              var id = state.getId("DFE-EXAMPLE");
              state.appendState(id, "user", { username: this.input.username } );
              this.input.loggedInUser = this.input.username;
              this.input.isLoginTrigger = true;
              this.rerender();
              setTimeout(() => {
                window.location = "http://www.cfryerdev-mfe.info/" 
              },3000);
          } else {
              alert("A username and password must be present");
          }
      },
      logout() {
        cookies.clear();
        this.input.username = "";
        this.input.loggedInUser = "";
        this.rerender();
      },
      rerender() {
        this.renderComponent = false;
        this.$nextTick(() => {
          this.renderComponent = true;
        });
      },
      init() {
        var id = state.getId("DFE-EXAMPLE");
        console.log(id);
        var userState = state.getStateElement(id, "user");
        if (userState !== undefined) {
          this.input.loggedInUser = userState.username;
        }
      }
  },
  mounted(){
    this.init()
  }
};
</script>