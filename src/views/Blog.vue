<template>
    <div class="block">
       <!--  <div class="block__content"> -->
            <!-- <Header /> -->
            <main>
               <div class="container">
                    <Article />
                </div> 
            </main>
            <Footer/>
        <!-- </div> -->
    </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import Article from '@/components/Article.vue';
import DetailsArticle from '@/views/DetailsArticle.vue';

function modal(){   
}
</script>

<style>
body {
    overflow-x: hidden;
    padding: 30px;
    background-color: rgb(91, 4, 4);
    height: 100vh;
    /* background-color: rgb(208, 239, 240) ; */
}

.block {
    background-color: rgb(238, 240, 240);
    /* border-radius: 35px; */
    height: calc(100vh - 60px);
    height: calc(100vh - (90px + 46px + 60px));
}

.container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
}

main {
    height: calc(100vh - (90px + 46px + 60px));
    padding: 25px 0;
    overflow-y: scroll;
    z-index: -1;
}

</style>