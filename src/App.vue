<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <v-app>
    <v-app-bar app color="primary">
      
    </v-app-bar>

    
    <v-main>
    
    </v-main>
  </v-app> -->
  <v-app>
    <v-app-bar v-if="storedUser" app color="secondary">
      <v-row>
        <v-col cols="10"></v-col>
        <v-col cols="2">
          <span  role="button" @click="Logout">Logout</span>
        </v-col>
      </v-row>
    </v-app-bar>
    <router-view />
  </v-app>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const storedUser = ref(null)

onMounted(() => {
  // Check if user data exists in localStorage when the app is loaded
   storedUser.value = JSON.parse(localStorage.getItem('user'));


  if (storedUser.value && storedUser.value.role) {
    if (storedUser.value.role=="editor") {
      router.push('/editor');
    }
    if (storedUser.value.role == "writer") {
      router.push('/writer');
    }
  } else {
    // If no data found, redirect to login page
    router.push('/login/editor');  // Redirect to login page
  }
});
function Logout() {
  localStorage.removeItem('user');
  window.location.reload();
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
