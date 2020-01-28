<template>

    <v-row justify="center" class="mb-12">
        
        <v-col cols="12"  > <p   class="text-center color  headline"> 04. what is next ?</p></v-col>
        <v-col  cols="12"> <p  :class="getintouchclass" class="text-center     font-weight-black"> Get In Touch</p></v-col>
        <v-col  md="6" sm="12" > <p  class="text-center   title font-weight-black"> Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p></v-col>
        <v-col cols="12">
             <v-row justify="center" align="center">
               <v-col cols="4" >
               <Rocket> </Rocket>
              </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <v-row justify="center" class="mb-8">
             
              <v-btn x-large outlined color="#14FCD5">Say Hello </v-btn>

             
            </v-row>
        </v-col>

    </v-row>
     
</template>
<script>
import Rocket from '../icon/Rocket'
export default {
    components:{
        Rocket
    },
     computed:{
    getintouchclass() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return {'display-1':true};
      case 'md': return {'display-3':true};
      case 'sm': return {'display-2':true};
      case 'lg': return {'display-3':true};
    }
  }
  }
}
</script>
<style scoped>
.color{
    color:#14fcd5;
}
</style>