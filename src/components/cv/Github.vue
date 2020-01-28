<template>
    <v-container class="mt-12" fluid >
          <v-row  justify="end" class="mt-12" >
            
           
            <v-col    md="2" sm="5" ><p id="intrested" class="title">project on Github</p></v-col>
           <v-col sm="6" xs="6" md="5"><v-divider class="mt-3"   ></v-divider></v-col>
            
        </v-row>

        <v-row justify="space-around" v-for="card in cards" :key='cards.name'>
         
        </v-row>
     

      
    </v-container>
</template>
<script>
export default {
    data:function(){
        return{
           cards:
           [
              {name:'cakestore',lang:'larave'},
              {name:'php-mvc',lang:'php'},
              {name:'spa-vuetify-template',lang:'vuecli'},
              
           ]


        }
    }
}
</script>