<template>
    <div class="articles">
        <h1>NOS ARTICLES</h1>
        <div class="article__content">
            <ul class="article__list">
                <li class="article__list__item {{ item.id }}" v-for="item in articles">
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
                        <a href="#">Voir Plus</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import image1 from '@/assets/Images/image(1).png'
import image2 from '@/assets/Images/image(7).png'
import image3 from '@/assets/Images/image(4).png'
import image4 from '@/assets/Images/image(6).png'
import image5 from '@/assets/Images/image(4).png'
import image6 from '@/assets/Images/image(6).png'
import image7 from '@/assets/Images/smiley.png'
import image8 from '@/assets/Images/image(2).png'

/* import DetailsArticle from './DetailsArticle.vue'; */

const articles = ref([
    {
        id: 1,
        image: image1,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
    {
        id: 2,
        image: image2,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
    {
        id: 3,
        image: image3,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
    {
        id: 4,
        image: image4,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
   {
        id: 5,
        image: image5,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
    {
        id: 6,
        image: image6,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
    {
        id: 7,
        image: image7,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    },
    {
        id: 8,
        image: image8,
        title: "amet consectetur amet consectetur amet consectetur",
        Summary: "Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magnam labore illum consequuntur ratione? Fugiat eos praesentium amet. Iusto magni, quisquam minima obcaecati repudiandae cupiditate quo consequatur ipsa dicta. Perferendis.",
        author: "DOSSOU Pauline"
    } 

])



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
    object-fit: contain;
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

.btn__see__more {
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