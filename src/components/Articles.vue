<template>
    <div class="articles">
        <h1>NOS ARTICLES</h1>
        <div class="article__content">
            <ul class="article__list">
                <li  class="article__list__item"  v-for="item in articles">
                    <div class="article__img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="article_title">
                        <h4>{{ item.title }}</h4>
                    </div>
                    <div class="summary">
                        <p>{{ item.Summary }}</p>
                    </div>
                    <div class="btn__see__more">
                        <RouterLink :to="`/Articles/${item.id}`">Voir plus</RouterLink>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {articles} from '@/database/articles.ts'

</script>

<style scoped>
.articles {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.articles h1 {
    text-align: center;
    font-size: 25px;
}

.article__list {
    display: flex;
    gap: 16.6px;
    flex-wrap: wrap;
    justify-content: center;
}
.article__list__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 265px;
    background-color: white;
    margin: 15px 0;
    box-shadow: 0 0 5px rgb(91, 4, 4);
}
.article__img {
    width: 265px;
    height: 150px;
}

.article__img img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.article_title {
    padding: 0 15px;
}
.article_title h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-transform: uppercase;
}
.summary p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-align: justify;
    padding: 0 15px;
}
.btn__see__more a {
    display: inline-block;
    text-align: center;
    padding: 5px 20px;
    border: 1px solid rgb(91, 4, 4);
    background-color: white;
    border-radius: 35px;
    color: black;
    font-weight: bold;
    margin-bottom: 10px;
    transition: all 0.5s ease-in;
}
.btn__see__more a:hover {
    background-color: rgb(91, 4, 4);
    color: white;
}
</style>