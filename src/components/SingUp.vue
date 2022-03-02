<template>
<div>
    <div class="sing-up">
        <img src="../assets/rlogo.png" alt="Restaurant" class="logo">
    <h1>SingUp</h1>
    <input type="text" v-model="user.name" placeholder="Enter Name">
    <input type="text" v-model="user.email" placeholder="Enter Email">
    <input type="password" v-model="user.password" placeholder="Enter Password">
    <button @click="singUp">Sing Up</button>
    <p>Already have an account 
        <router-link to='/login'>LogIn</router-link>
    </p>
    </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
    name:'SingUp',
    data(){
        return{
            user:{
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        async singUp(){
            //for store inj json server
            let result=await axios.post("http://localhost:3000/users",this.user)
            if(result.status==201){
            // for store in local storage
                localStorage.setItem("user-info",JSON.stringify(result.data))
                alert("Sing Up Successfull")
                    //for new clear data
                this.$router.push({name:'HomeComp'})
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
    .sing-up{
        width: 500px;
        margin: 20px auto;
    }
    .sing-up input{
        width: 90%;
        padding: 8px;
        border: none;
        margin: 10px 5%;
        border: 2px solid #6b6969;
        outline: none;
    }
    .sing-up button{
        width: 200px;
        background: #313131;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
    .sing-up button:hover{
        background: #000;
    }
    p{
        text-align: right;
        font-size: 12px;
    }
</style>