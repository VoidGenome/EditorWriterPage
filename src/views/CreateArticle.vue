<template>
    <v-dialog v-model="dialog" width="1000px" height="600">
        <v-card width="1000px" height="600">
            <v-card-title>
                <v-row no-gutters class="justify-end" ><v-icon @click="closeDialog()">mdi-close</v-icon></v-row>
            </v-card-title>
            <v-card-text class="pa-10">
                
                <v-form>
                    <v-row class="w-100">
                        <v-col cols="4">
                            <v-text-field v-model="newArticle.title" label="Title"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="newArticle.link" label="Link"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="newArticle.date" label="Date"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="w-100">
                        <v-col cols="4">
                            <v-text-field label="Writer's Name"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field label="Editor's Name"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field label="Image"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="w-100">
                        <v-col cols="12">
                            <v-textarea style="height: 200px;"  v-model="newArticle.content" label="Content" required />
                        </v-col>

                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>


<script setup>
import {  defineEmits,defineProps, watch,computed,ref } from "vue"

// const createArticleDialog = defineModel("createArticleDialog")
 const props = defineProps({
    createArticleDialog: Boolean,
 });
 const emit = defineEmits(["closeDialog"])
const newArticle = ref({})

const dialog = computed(() => {
    return props.createArticleDialog
})

function closeDialog() {
    emit("closeDialog",false)
}

watch(dialog, (newVa) => {
    if (newVa == false) {
        console.log(newVa);
    }
})
</script>


