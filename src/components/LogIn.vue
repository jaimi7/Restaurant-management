<template>
<div>
    <div class="log-in">
    <img src="../assets/rlogo.png" alt="Restaurant" class="logo">
    <h1>Log In</h1>
    <input type="text" v-model="user.email" placeholder="Enter Email">
    <input type="password" v-model="user.password" placeholder="Enter Password">
    <button @click="logIn">Log In</button>
    <p>Create an account 
        <router-link to='/singup'>SingUp</router-link>
    </p>
    </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
    name:'LogIn',
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        async logIn(){
            let result=await axios.get(`http://localhost:3000/users?email=${this.user.email}&password=${this.user.password}`)
            if(result.status==200 && result.data.length>0){
            // for store in local storage
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                alert("Log In Successfull")
                    //for new clear data
                this.$router.push({name:'HomeComp'})
            }else{
                console.log("by")
            }
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomeComp'})
        }
    }
}

</script>

<style scoped>
    .logo{
        width: 100px;
    }
    .log-in{
        width: 500px;
        margin: 20px auto;
    }
    .log-in input{
        width: 90%;
        padding: 8px;
        border: none;
        margin: 10px 5%;
        border: 2px solid #6b6969;
        outline: none;
    }
    .log-in button{
        width: 200px;
        background: #313131;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
    .log-in button:hover{
        background: #000;
    }
    p{
        text-align: right;
        font-size: 12px;
    }
</style>