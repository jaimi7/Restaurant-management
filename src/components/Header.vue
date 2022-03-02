<template>
    <div class="header">
        <router-link to='/' class="link">Home</router-link>
        <router-link to='/addrestaurant' class="link">Add Restaurant</router-link>
        <p class="link" @click="logOut()">Logout</p>
    </div>
</template>

<script>

export default {
    name:'HeaderComp',
    methods:{
        logOut(){
            localStorage.clear()
            alert("Log out successfull")
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.header{
    background: #333333;
    overflow: hidden;
}
.header .link{
    text-decoration: none;
    color: aliceblue;
    display: inline-block;
    margin: 0px 5px;
    padding: 12px 20px;
    font-weight: bold;
    cursor: pointer;
}
.header .link:hover{
    background: aliceblue;
    color: #333333;
}
</style>