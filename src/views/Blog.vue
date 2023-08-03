<template>
    <div class="block">
        <div class="block__content">
            <Header />
            <main>
                <div class="container">
                    <Article />
                </div>
            </main>
            <DetailsArticle />
            <footer>
                <div class="footer__content">
                    <p>Nous vous tenons informer des actualités dans le monde</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Article from '@/components/Article.vue';
import DetailsArticle from '@/components/DetailsArticle.vue';
/* const Art = [
    [
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(1).png",
            description: "Ce que l'amour peut faire, l'amour ose le tenter.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(2).png",
            description: "Mieux vaut vivre enchaîné près de celui que l'on aime, que libre au milieu des jardins près de celui que l'on hait.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(3).png",
            description: "Les fautes sont grandes quand l'amour est petit.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(4).png",
            description: "L'amour sans une certaine folie ne vaut pas une sardine !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(5).png",
            description: "La bouderie en amour est comme le sel ; il n'en faut pas trop.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(6).png",
            description: "L'amour est un jardin fleuri et le mariage un champ d'orties.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(7).png",
            description: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(8).png",
            description: "Même avec un miroir, je refuse de te partager.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(9).png",
            description: "Jusqu'à présent, je n'avais fait de déclaration d'amour qu'à des femmes que je n'aimais pas ; alors je m'en tirais très bien.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(10).png",
            description: "Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(11).png",
            description: "Lorsqu'un amour est notre vie, quelle différence y a-t-il entre vivre ensemble ou mourir ensemble ?",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(12).png",
            description: "C'est quand on serre une femme de trop près qu'elle trouve qu'on va trop loin.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(13).png",
            description: "Le souvenir d'un amour révolu, lorsqu'il demeure fortement dans la mémoire, n'est pas moins absorbant que ne l'était cet amour même.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(14).png",
            description: "Ce n'est pas la mort qui nous prend ceux que nous aimons ; elle nous les garde au contraire et les fixe dans leur jeunesse adorable : la mort est le sel de notre amour ; c'est la vie qui dissout l'amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(15).png",
            description: "Un premier amour jette dans le coeur de profondes racines qui étouffent jusqu'aux germes des sentiments antérieurs.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(16).png",
            description: "Les gens difficiles à aimer représentent un défi, et c'est ce défi qui les rend plus faciles à aimer. On y est poussé. Ceux qui veulent d’un amour facile n’ont pas vraiment envie d’amour.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(17).png",
            description: "On ne se débarrasse pas facilement d'un amour dont on a vécu, ne fut-ce que quelques jours.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(18).png",
            description: "Mon but : partager mon amour pour  `<strong>Melonne</strong>`, tout en faisant découvrir des compositeurs peu connus.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(19).png",
            description: "Ni feu, ni charbon, Ne sont aussi brûlants Qu'un amour secret Que chacun ignore.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(20).png",
            description: "Croyez-le, le véritable amour est éternel, infini, toujours semblable à lui-même ; il est égal et pur, sans démonstrations violentes ; il se voit en cheveux blancs, toujours jeune de cœur.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(21).png",
            description: "Le sexe sans amour n'est pas toujours drôle... Mais c'est plus drôle que l'amour sans le sexe !",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(22).png",
            description: "Et si l'univers est tout amour, que craindre ? Rencontrer plus d'amour encore... Un amour qui irait jusqu'à nous anéantir, pour nous mettre éternellement à l'abri de l'inquiétude et des élancements...",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(23).png",
            description: "La polygamie n'est pas l'expression d'un amour extrême, mais d'un mépris excessif des femmes.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {

            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
        {
            image_url: "Images/image(24).png",
            description: "Un peu de jalousie éveille un amour heureux qui s'endort.",
            author: "Rostel Missimawu"
        },
    ]
] */
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
    border-radius: 35px;
    height: calc(100vh - 60px);
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

}

footer {
    z-index: -1;
}

.footer__content {
    padding: 15px 0;
    background-color: white;
    border-radius: 0 0 35px 35px;
}

.footer__content p {
    text-align: center;
}</style>