<template>
  <section class="events">
      <div class="container">
          <div class="events-inner">
                 <div class="events-commit">
                     <div class="news-commit__text">The latest events from Diplomat</div>
                     <div class="news-commit__title">Diplomat events</div>
                 </div>
                 <div class="events-box"  v-if="events.length"  >
                     <div class="events-item" v-for="item in events" :key="item.id">
                             <div class="events-item__date">
                             <h3 class="date-day">{{item.day}}</h3>
                             <p class="date-month">march, 2022</p>
                             <span class="date-week">monday</span>
                        
                            </div>
                       
                            <div class="events-item__img"><img :src="item.img" alt=""></div>
                      
                             <div class="events-item__commit"><h5>{{item.commit}}</h5></div>
                     
                       
                            <div class="events-item__connect">
                           <div class="events-item__mini">
                                 <h5 class="connect-hour">{{item.hour}}</h5>
                             <span class="connect-plan">{{item.plan}}</span>
                           </div>
                             <button type="button" class="connect-btn btn btn-outline-primary">View more</button>
                         
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
            events:[
                { id:1, day: "04", img: require("../assets/img/ev-1.png"), commit:"Canadians push research ethics in undergraduate classes", hour:"3.00 pm", plan:"Seminar" },
                { id:2, day: "15", img: require("../assets/img/ev-2.png"), commit:"Canadians push research ethics in undergraduate classes", hour:"4.00 pm", plan:"Seminar" },
                { id:3, day: "23", img: require("../assets/img/ev-3.png"), commit:"Canadians push research ethics in undergraduate classes", hour:"5.00 pm", plan:"Party" },
                  
            ]
        }
    }
}
</script>

<style>

</style>