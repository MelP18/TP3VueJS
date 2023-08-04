<template>
    <div class="new__article">
        <div class="article__name">
            <label for="">Titre de l'Article</label>
            <input v-model="title" type="text" name="" id="">
        </div>
        <div class="article__content">
            <label for="">Description</label>
            <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="btn__submit">
            <button type="submit" @click="artcicle">Ajouter</button>
            <div class="details__article">
                <p class="title">{{articleObjet.title}}</p>
                <p class="content">{{ articleObjet.content }}</p>
            </div> 
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const title = ref()
const content = ref()

const articleObjet = ref({
    title:'',
    content:''
})
function artcicle(){
    articleObjet.value = {
        title :title.value,
        content: content.value
    }
}
</script>