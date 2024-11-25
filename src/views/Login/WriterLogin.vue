<template>
    <v-row class="pa-5 justify-center d-flex align-center">
        <v-card width="500px" height="350px" class="pa-10">
            <v-row class="w-100 justify-center d-flex align-center">
                <v-row class="w-100 justify-center d-flex align-center">
                    <span>Login as</span>
                    <span class="ml-1 text-decoration-underline" @click="goToEditorLogin()">Editor</span>
                </v-row>
                <v-row class="w-100 justify-center d-flex align-center">
                    <v-col cols="12">
                        <v-text-field label="Username" v-model="username"
                            :rules="[val => !!val || 'Username is required']"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Password" v-model="password" type="password"
                            :rules="[val => !!val || 'Password is required']"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="primary" block @click="login()">Login</v-btn>
                    </v-col>
                </v-row>
            </v-row>
        </v-card>
    </v-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {ref} from "vue"

const router = useRouter();

// Data properties for the form
const username = ref('');
const password = ref('');

// Function to navigate to the editor login page (optional)
function goToEditorLogin() {
    router.push("/login/editor");
}

// Function to handle the login
function login() {
    // For simplicity, let's assume any non-empty username and password are valid
    if (username.value && password.value) {
        // Store the user data in localStorage
        const userData = {
            username: username.value,
            role:"writer"
            // You can also store an auth token or other data here
        };
        localStorage.setItem('user', JSON.stringify(userData)); // Store data as JSON

        // After login, navigate to the editor or dashboard
        router.push('/writer'); // Example of redirecting to another page after login
        window.location.reload();
    } else {
        // Handle error case - e.g., show a message that login failed
        alert('Please enter both username and password');
    }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
