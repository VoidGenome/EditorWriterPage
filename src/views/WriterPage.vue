<template>
    <v-row class="pa-10 mt-15 d-flex w-100">
        <v-row no-gutters class="w-100">
            <v-col cols="4">
                <v-select density="compact" :items="selection" v-model="selectedFilter"></v-select>
            </v-col>
            <v-col cols="4">
                <v-btn @click="createArticle" append-inner-icon="mdi-plus-circle-outline">Create Article

                    <template v-slot:append>
                        <v-icon>mdi-plus-circle-outline</v-icon>
                    </template>
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="w-100">
            <v-col cols="4">
                <v-card height="600px" width="100%"></v-card>
            </v-col>
        </v-row>

        <CreateArticle :createArticleDialog="createArticleDialog"  @closeDialog="closeDialog"/>
    </v-row>

</template>



<script setup>
import { ref } from "vue"
import CreateArticle from "./CreateArticle.vue"

const selectedFilter =ref("All")
const selection = ref(["All", "For Edit", "Published"])
const createArticleDialog = ref(false)

function createArticle() {
    createArticleDialog.value = true
}
function closeDialog() {
    createArticleDialog.value = false
}
</script>