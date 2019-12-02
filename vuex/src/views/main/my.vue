<template>
    <div>
        <button @click="login()">登录</button>
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            window.localStorage.setItem('login','true')
            this.$router.replace('/')
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
