<template>
  <div>
    <Header />
    <div class="add-restaurant">
      <img src="../assets/rlogo.png" alt="Restaurant" class="logo" />
      <h1>Add Restaurant</h1>
      <input type="text" v-model="restaurant.name" placeholder="Enter Restaurant Name" />
      <input type="text" v-model="restaurant.address" placeholder="Enter Restaurant Address" />
      <input type="text" v-model="restaurant.contact" placeholder="Enter Restaurant Contact" />
      <button @click="add">Add</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "./Header.vue";

export default {
  name: "AddRestaurant",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: null,
      },
    };
  },
  mounted(){
      // for user (no redirect to te singup page)
        let user=localStorage.getItem('user-info')
        this.user=JSON.parse(user)
        if(!user){
            this.$router.push({name:'SingUp'})
        }
  },
  methods: {
    async add() {
        //for store inj json server
            let result=await axios.post("http://localhost:3000/restaurants",this.restaurant)
            if(result.status==201){
                alert("Add Restaurant Successfull")
                    //for new clear data
                this.$router.push({name:'HomeComp'})
            }
    },
  },
};
</script>


<style scoped>
.logo {
  width: 100px;
}
.add-restaurant {
  width: 500px;
  margin: 20px auto;
}
.add-restaurant input {
  width: 90%;
  padding: 8px;
  border: none;
  margin: 10px 5%;
  border: 2px solid #6b6969;
  outline: none;
}
.add-restaurant button {
  width: 200px;
  background: #313131;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.add-restaurant button:hover {
  background: #000;
}
</style>