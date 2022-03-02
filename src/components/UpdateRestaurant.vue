<template>
  <div>
    <Header />
    <div class="update-restaurant">
      <img src="../assets/rlogo.png" alt="Restaurant" class="logo" />
      <h1>Update Restaurant</h1>
      <input
        type="text"
        v-model="restaurant.name"
        placeholder="Enter Restaurant Name"
      />
      <input
        type="text"
        v-model="restaurant.address"
        placeholder="Enter Restaurant Address"
      />
      <input
        type="text"
        v-model="restaurant.contact"
        placeholder="Enter Restaurant Contact"
      />
      <button @click="update">Update</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "UpdateRestaurant",
  components: {
    Header,
  },
  data() {
    return {
      id: this.$route.params.id,
      restaurant: {},
    };
  },
  mounted() {
      this.showData()
  },
  methods: {
    async update() {
      //for store inj json server
      let result = await axios.put(
        "http://localhost:3000/restaurants/" + this.id,
        this.restaurant
      );
      
      if (result.status == 200) {
          this.showData()
        alert("Update Restaurant Successfull");
        //for new clear data
        this.$router.push({ name: "HomeComp" });
      }
    },
    async showData(){
// for user (no redirect to te singup page)
    let user = localStorage.getItem("user-info");
    this.user = JSON.parse(user);
    if (!user) {
      this.$router.push({ name: "SingUp" });
    }

    // for fetch data
    let result =await axios.get(
      "http://localhost:3000/restaurants/" + this.id
    );
    this.restaurant = result.data;
    }
  },
};
</script>

<style scoped>
.logo {
  width: 100px;
}
.update-restaurant {
  width: 500px;
  margin: 20px auto;
}
.update-restaurant input {
  width: 90%;
  padding: 8px;
  border: none;
  margin: 10px 5%;
  border: 2px solid #6b6969;
  outline: none;
}
.update-restaurant button {
  width: 200px;
  background: #313131;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.update-restaurant button:hover {
  background: #000;
}
</style>