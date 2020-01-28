<template>
    <v-container class="mt-12" fluid >
          <v-row  justify="end" class="mt-12" >
            
           
            <v-col    md="1" sm="5" ><p id="intrested" class="title">01.Intrested</p></v-col>
           <v-col sm="6" xs="6" md="5"><v-divider class="mt-3"   ></v-divider></v-col>
            
        </v-row>
        <Intrested></Intrested>
        <Intrested2></Intrested2>

      
    </v-container>
</template>

<script>
import Intrested from '../base/Intrested'
import Intrested2 from '../base/Intrested2'
import Laravel from '../icon/Laravel'
import Vue from '../icon/Vue'
import Vivus from 'vivus'
export default {

    components:{
        Laravel,
        Vue,
        Intrested,
        Intrested2,
    },
   
    
}
</script>

<style scoped>
.divider-color{
    background-color: #14FCD5;
}

</style>