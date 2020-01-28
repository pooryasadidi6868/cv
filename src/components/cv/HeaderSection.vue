<template>
            <v-row  class="mt-12" justify="center">
                <v-col md="10" sm="12" xs="12">
                  <v-card  flat>
                      <v-card-text id="anime"><p style="font-family:SFMono"  class=" cv--text text--darken-3" >Hi, my name is</p> </v-card-text>
                      <v-card-text id="anime"><p  :class="fontclass" class="font-weight-black  text-capitalize white--text" >Pouria Sadidi</p> </v-card-text>
                      <v-card-text id="anime"><p  :class="fontclass" class="font-weight-black  text-capitalize">I Build Things for the web</p> </v-card-text>
                      <v-card-text id="anime" width="100"><span class="text-justify  ">I'm a software engineer based in Tehran,</br> MA specializing in building (and occasionally designing) exceptional,</br> high-quality websites and applications.</span> </v-card-text>
                      <v-card-actions id="anime"><v-btn href="mailto:pooryasadidi6868@gmail.com" x-large class="ml-2" color="cv" outlined > get in touch</v-btn> </v-card-actions>
                  
                  </v-card>
                </v-col>
               
              </v-row>
       
  
</template>

<script>
import anime from 'animejs'
export default {
  computed:{
    fontclass() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return {'headline':true};
      case 'md': return {'display-3':true};
      case 'lg': return {'display-3':true};
      case 'sm': return {'display-2':true};
    }
  }
  },

   mounted(){
     
          anime({
           targets: "#anime",
           opacity:1,
           translateY:-8,
           delay: 900,
           duration:1200,
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