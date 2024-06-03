<template>
  <div id="app">
    <nav class="flex justify-between items-center">
      <div>
        <a href="/">
          <img src="./assets/logo.png" alt="Logo" />
        </a>
      </div>
      <div>
        <p
          v-if="token"
          @click="logout"
          class="font-bold text-[#2c3e50] hover:cursor-pointer hover:text-green-500"
        >
          Logout
        </p>
        <div v-else>
          <router-link to="/login">Login</router-link> |
          <router-link to="/signup">Signup</router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="mt-20">This is Footer</footer>
  </div>
</template>

<script setup>
import { useUserState } from "./composable/useUserState";
import axios from "axios";
import { onMounted } from "vue";


const token = window.localStorage.getItem("access_token");
const { user, setUser } = useUserState();

const logout = async () => {
  try {
    await axios.post("https://express-supabase-social-oauth.vercel.app/api/auth/signout", {
      token: "token", // Ideally, replace with actual token
    });
    setUser(null); // Clear user state after logout
    alert("Signout successful");
  } catch (error) {
    alert("Signout failed");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
