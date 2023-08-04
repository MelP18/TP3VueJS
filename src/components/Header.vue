<template>
    <header>
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <a href="#">LOGO</a>
                </div>
                <div class="header__menu">
                    <div class="header__menu__list">
                        <div class="header__item ">
                            <a href="" class="active">Acceuil</a>
                        </div>
                        <div class="header__item">
                            <a href="">A propos</a>
                        </div>
                        <div class="header__item">
                            <a href="">Contacts</a>
                        </div>
                    </div>
                    <div class="header__menu__list show">
                        <div class="header__item">
                            <a href="" class="active">Acceuil</a>
                        </div>
                        <div class="header__item">
                            <a href="">A propos</a>
                        </div>
                        <div class="header__item">
                            <a href="">Contacts</a>
                        </div>
                    </div>
                </div>
                <div class="hamburger">
                    <span></span>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
</script>

<style>

@charset "UTF-8";

* {
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 14px;
    z-index: 5;
    box-sizing: border-box;
    color: black;
    font-family: 'Montserrat-Regular';
}

ul li {
    list-style-type: none;
}

a,
a.active a:hover {
    text-decoration: none;
}


/*=================================>HEADER<===========================*/
header {
    background-color:white ;
    border-radius: 35px 35px 0 0;
}
.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}
.header__logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(91, 4, 4);
    text-align: center;
    line-height: 60px;
}
.header__logo a {
    font-weight: bold;
    color: white;
    font-family: 'Aclonica-Regular';
}
.header__menu__list {
    display: flex;
    gap: 50px;
}
.header__menu__list.show{
    display: none;
}
.header__item a {
    font-weight: bold;
    font-family: 'Montserrat-Medium';
}
.header__item a.active{
    margin-bottom: 7px;
    border-bottom: 2px solid rgb(91, 4, 4);
    font-family: 'Aclonica-Regular';
}
/*================================> HAMBURGER <===================================*/
.hamburger{
    display: none;
    width: 50px;
    height: 50px;
}
.hamburger span{
    content: '';
    position: absolute;
    background-color: rgb(91, 4, 4);
    height: 3px;
    width: 40px;
    display: block;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    transition: all 0.3s ease-in;
}
.hamburger span::after,
.hamburger span::before{
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background-color: rgb(91, 4, 4);
    left: 50%;
    transform: translate(-50%);
    transition: all 0.3s ease-in;
}
.hamburger span::after{
    bottom: -7px;
}
.hamburger span::before{
    top: -7px;
}
.hamburger span.active{
    background-color: transparent;
}
.hamburger span.active::after{
    bottom: 0;
    transform: translate(-50%) rotate(-40deg);
}
.hamburger span.active::before{
    top: 0;
    transform: translate(-50%) rotate(40deg);
}
@media(max-width:620px){
    .header__menu__list{
        display: none;
    }
    .hamburger{
        display: block;
    }
    .header__menu{
        width: 100%;
        position: absolute;
        
    }
    .header__menu__list.show{
        flex-direction: column;
        position: absolute;
        background-color: white;
        top:50px; 
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 25px;
    }
}
</style>