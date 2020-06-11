<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      >
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {}
};
</script>