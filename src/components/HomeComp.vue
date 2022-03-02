<template>
  <div>
    <Header />
    <h3>Welcome, {{ user.name }}</h3>
    <img src="../assets/rlogo.png" alt="Restaurant" class="logo" />

    <h1>All Restaurant</h1>

    <table class="table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th colspan="2">Action</th>
      </tr>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.address }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>
          <router-link
            :to="'/updaterestaurant/' + restaurant.id"
            class="action-update"
            >Update</router-link
          >
        </td>
        <td>
          <button v-on:click="deleteResto(restaurant.id)" class="action-delete">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "HomeComp",
  components: {
    Header,
  },
  data() {
    return {
      user: {},
      restaurants: [],
    };
  },
  async mounted() {
    // for user (no redirect to te singup page)
    let user = localStorage.getItem("user-info");
    this.user = JSON.parse(user);
    if (!user) {
      this.$router.push({ name: "SingUp" });
    }

    // for fetch data
    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurants = result.data;
  },
  methods: {
    async deleteResto(id) {
      if (confirm("Do ypu want to delete ?")) {
        let result = await axios.delete(
          "http://localhost:3000/restaurants/" + id
        );
        if (result.status == 200) {
          alert("Delete Restaurant");
        }
      }
    },
  },
};
</script>

<style scoped>
.logo {
  width: 100px;
}
.table {
  width: 60%;
  margin: 20px auto;
}
table tr th {
  border-bottom: 1px solid #ccc;
  padding: 15px;
}
table tr td {
  padding: 10px;
}
.action-update {
  background: #004297;
  color: #fff;
  padding: 8px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 13px;
}
.action-update:hover {
  background: #00204b;
}
.action-delete {
  color: #fff;
  padding: 8px 10px;
  border-radius: 5px;
  background: #e60000;
  font-size: 13px;
  cursor: pointer;
  border: none;
}
.action-delete:hover {
  background: #960000;
}
</style>