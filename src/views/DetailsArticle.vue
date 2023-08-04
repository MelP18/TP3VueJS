<template>
    <div class="article">
        <div class="container">
            <div class="detail__article" v-if="article">
                <div class="article__img">
                    <img :src="article.image" alt="">
                </div>
                <div class="detail__article__content">
                    <div class="article__title">
                        <h4>{{ article.title }}</h4>
                    </div>
                    <div class="article__description">
                        <p>{{ article.description }}</p>
                    </div>
                    <div class="article__author">
                        <p>{{ article.author }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { articles } from '@/database/articles'
import { onMounted } from 'vue';
const route = useRoute()
const id = route.params.id
const article = ref()



onMounted(() => {
    const art = articles.find(item => item.id == Number(id))
    if (art) {
        article.value = art
    }
})


</script>
<style scoped>
.article {
    height: calc(100vh - (90px + 46px + 60px));
    padding: 25px 0;
    overflow-y: scroll;
    z-index: -1;
    background-color: rgb(204, 199, 199);
    padding: 15px;
}

.detail__article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    padding: 15px 0;
}

.article__img {
    display: flex;
    justify-content: center;
    width: 350px;
    height: 350px;
    padding: 10px;
    border-radius: 100%;
    border: 1px solid rgb(59, 2, 2);
}

.article__img img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
}
.detail__article__content {
    width: calc(100% - 500px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
}
.article__title{
    text-align: center;
}
.article__description p{
    line-height: 25px;
    text-align: justify;
}
.article__author {
    display: flex;
    justify-content: right;
}
</style>