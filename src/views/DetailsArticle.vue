<template>
    <div class="details__article">
        <!-- <div class="close__modal">
            <span class="close"></span>
        </div> -->
        <div class="detail__article__content" v-if="articles">
            <div class="article__title">
                <h4>{{ title }}</h4>
            </div>
            <div class="article__description">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import { articles } from '@/components/Article.vue';
const route = useRoute()

</script>
<style scoped>
.details__article {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 25px;
    z-index: 10;
    top: 0;
    background-color: rgba(134, 6, 10, 0.37);
    border: 1.5px solid rgb(238, 240, 240);
    box-shadow: 0 8px 35px 0 rgba(134, 6, 10, 0.37);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 35px;
    opacity: 0;
    visibility: hidden;
    transition: 1s;
    overflow-x: scroll;
    overflow-x: hidden;
}

.close__modal {
    position: absolute;
    display: block;
    right: 50px;
    top: 10px;
}

.close__modal .close {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: white;
}

.close__modal .close:hover {
    background-color: rgb(91, 4, 4);
}

.close__modal:hover span::after,
.close__modal:hover span:before {
    background-color: white;
}

.close::after,
.close::before {
    content: "";
    position: absolute;
    background-color: rgb(91, 4, 4);
    width: 25px;
    height: 3px;
    top: 50%;
    left: 50%;
}

.close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.close::before {
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>