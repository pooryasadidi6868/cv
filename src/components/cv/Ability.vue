<template>
<v-container fluid>
  <v-row class="mt-10" justify="first">
    
           <v-col    md="1" sm="5" ><p id="Ability" class="title">01.Ability</p></v-col>
           <v-col sm="6" xs="6" md="5"><v-divider class="mt-3"    ></v-divider></v-col>
            
      
  </v-row>

  

  <v-row justify="center">


        

  <v-col md="7" sm="10" >
    
    <v-card elevation="7" class="pt-10" >
      <v-system-bar
      color="dark"
      window
      >
      <v-spacer></v-spacer>
      <v-icon >mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
        
      </v-system-bar>
      <v-container class="console"  fluid >
        
        <v-row >
          <v-col cols="1"><v-icon class="console-icon" >mdi-console-line</v-icon> </v-col>
          
          <v-col class="pr-1" cols="9"> 
                  <vue-typer
                    :text='["PHP7","LARAVEL / RESTAPI / AJAX...","VUE / VUECLI3 / VUETIFY / SPA....."]'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='1000'
                    :type-delay='90'
                    :pre-erase-delay='1000'
                    :erase-delay='90'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='blink'
                    >
                  </vue-typer>
           </v-col>
        </v-row>
        
      </v-container>

    </v-card>
  </v-col>
</v-row>

</v-container>


<!-- <v-row justify="center">
    <v-col cols="7">
             <v-alert  border="bottom"
                       
                        colored-border
                        color="#14FCD5"
                        elevation="2"
                        icon="mdi-school">
                    <vue-typer
                    class="me"
                    :text='["LARAVEL","PHP","VUE.JS {VUEX  VUE-ROUTER....}","REST API","VUETIFY"]'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='800'
                    :type-delay='80'
                    :pre-erase-delay='2000'
                    :erase-delay='50'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='blink'
                      ></vue-typer>
        </v-alert>
    </v-col>
</v-row> -->
   
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  // data:function(){
  //   return{
  //     VueTyperItems:[
  //       {text:"PHP7",repeat:'0', pretypedelay:'1000',erasedelay:'4500' },
  //       {text:'VUE/SPA/VUETIFY.....',repeat:'0', pretypedelay:'1360',erasedelay:'4900' },
  //       {text:'LARAVEL/RESTAPI/AJAX....',repeat:'0', pretypedelay:'3160',erasedelay:'2000' },
  //     ]

  //   }
  // },
    components:{
        VueTyper
    }
    
}
</script>
<style  scoped>

.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
     font-family: Calibre;
     font-size: 22px;
     

}
.console{
  background-color:#0A192F
}
.console-icon{
  animation: blinking 1s infinite 
}

@keyframes blinking {
  from{opacity:0 ;}
  to{opacity:1 ;}
}


</style>
