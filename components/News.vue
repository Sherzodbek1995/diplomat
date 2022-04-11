<template>
    <section class="news">
      <div class="container">
          <div class="news-inner">
             <div class="news-content">
                 <div class="news-commit">
                     <div class="news-commit__text">The latest stories from Diplomat</div>
                     <div class="news-commit__title">Diplomat news</div>
                 </div>
                 <Button text="View more"/>
             </div>
             <div class="diplomat-row" v-if="card.length">
                 <div class="col-6">
                     <div class="news-card">
                         <div class="news-card__img"><img src="../assets/img/card-1.png" alt=""></div>
                         <div class="news-card__date">March 23, 2022</div>
                         <div class="news-card__title">Books and podcasts that inspire to break the gender bias</div>
                     </div>
                 </div>
                 <div class="col-3" v-for="item in card" :key="item.id">
                     <div class="news-card" >
                         <div class="news-card__img"><img :src="item.img" alt=""></div>
                         <p class="news-card__date">March 23, 2022</p>
                         <div class="news-card__text">{{ item.title}}</div>
                     </div> 
                 </div>
             </div>
          </div>
      </div>
    </section>
</template>

<script>

export default {
   
    data(){
        return{
            card:[ 
                { id:1, img: require("../assets/img/card-2.png"), title: 'Universities must not shirk public role, says Sorbonne president'},
                { id:2, img: require("../assets/img/card-3.png"), title: 'Modern universities should be the engines of levelling up'},
                { id:3, img: require("../assets/img/card-4.png"), title: 'UNC research chief steps down over plagiarism charge'},
                { id:4, img: require("../assets/img/card-5.png"), title: 'Canadians push research ethics in undergraduate classes'},
                { id:5, img: require("../assets/img/card-6.png"), title: 'Biden expands loan forgiveness for public sector workers'},
                { id:6, img: require("../assets/img/card-7.png"), title: 'Politics splits US college admissions counsellors'},
                ],
                facult:[
                    { id:1, img: require('../assets/img/facult.png')},
                    { id:2, img: require('../assets/img/facult2.png')}
                ]
        }
    }
}
</script>

<style scoped>

</style>