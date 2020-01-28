<template>
<v-container  class="logo-display">
    <v-row justify="center" >
        <v-col justify-self="center" md="3" sm="3" xs="3">
        <svg  id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" >
        <defs>
            <path   data-ignore="true" d="M 140 160 L 140 120 L 164 120 L 164 140 L 150 140   " id="b" />>
            <path  d="M 150 210 L 210 170 L 210 110 L 150 70 L 90 110 L 90 170 L 150 210  z " id="a"/>
           
        </defs> 

            
             <use xlink:href="#a" fill-opacity="0" stroke="#18FFFF" stroke-width="6"/>
             <use xlink:href="#b" fill-opacity="0" stroke="#18FFFF" stroke-width="7"/> 
           
           
          
       
        </svg>
        </v-col>
      
       
    </v-row>
</v-container>


   

</template>


<script>
import Vivus from 'vivus'
import Router from 'vue-router'

import anime from 'animejs';
export default {
    components:{
       
    },
   
   methods:{
     go:function(){
       
     }
   },

    mounted(){
      var h = this
      let vivus =  new Vivus('logo', {duration: 310,type: 'oneByOne',animTimingFunction: Vivus.EASE_OUT, delay: 100});
        vivus.play(1,function(){
              h.$router.push('/index')
        })
          anime({
           targets: "#b",
           opacity:1,
           delay: 2000,
           duration:1200,
           easing: 'easeInOutSine'
      });

        

    },
    


   
}
</script>

<style scoped>
.logo-display{
    margin-top: 200px;
}
#b{
    opacity: 0;
}
#l{
    font-family: SFMono;
    fill: red
}
</style>