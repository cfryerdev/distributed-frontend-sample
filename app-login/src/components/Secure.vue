<template>
    <div id="secure">
        <p>You are logged in.</p>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        methods: {
            logout() {
                this.$emit("authenticated", false);
            }
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>