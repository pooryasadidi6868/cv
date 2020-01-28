<template> 
     <v-app-bar id="anime" height="100" hide-on-scroll   elevation="0">
          <v-btn  height='60' width='60' text>
            <v-img src="../../assets/images/logo.jpg" height="60px" width="60px"></v-img>  
          </v-btn>
         
           <v-toolbar-items  class="mx-10  hidden-sm-and-down">
                <v-btn x-small color="cv" href="#aboutme"  text> 01.  Me</v-btn>
                <v-btn x-small  color="cv"  href="#intrested"  text>  02.  Intrested</v-btn>
                <v-btn x-small color="cv" href="#Ability"  text>  03.  Ability</v-btn>
            </v-toolbar-items>
         <v-spacer></v-spacer>
         <v-btn color="white" outlined>Resume</v-btn>
         

    </v-app-bar>

   
</template>

<script>
import anime from 'animejs'
export default {
   mounted(){
     
          anime({
           targets: "#anime",
           opacity:1,
           
           delay: 600,
           duration:1000,
           easing: 'easeInOutSine'
      });

}
}
</script>
<style scoped>
#anime{
  opacity: 0;
}
</style>