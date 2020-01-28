<template>
    <v-row justify="center">
        <v-col md="4" sm="12">
            <v-card
                 class="cover"
                color="#0A192F"
                raised
                dark
                max-width="400"
              >
                <v-card-title>
                  <v-btn icon href="https://github.com/yyx990803">
                  <v-icon
                    large
                    left
                  >
                    mdi-github-circle
                  </v-icon>
                  </v-btn>
                  <span class="title font-weight-light">Github</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                  " the creator of vuejs.org  progressive JavaScript framework."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="../../assets/images/evan.jpg"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title> Evan You</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-icon class="mr-1">mdi-star</v-icon>
                      <span class="subheading mr-2 mt-2">152k</span>
                      <span class="mr-1">·</span>
                      <v-icon class="mr-1">mdi-share-variant</v-icon>
                      <span class="subheading mt-2">45</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
        </v-col>


         <v-col md="6" sm="6">
            <v-img class="d-block " :class="cardclass" gradient="210deg, rgba(2,0,0,.9), rgba(255,0,0,0) 70.71% " max-height="400" max-width="600" src="../../assets/images/vue.jpg"></v-img>
            
        </v-col>

    </v-row>




         

   
</template>

<script>

export default {

  computed:{
    cardclass() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return {'left':false};
      case 'md': return {'left':true};
      case 'sm': return {'left':true};
      case 'lg': return {'left':true};
    }
  }
  }
    
}
</script>
<style scoped>
.filter{
background-color: aqua;
opacity: 0.6;
}
.cover{
    z-index: 2;
    top: 32px;
}
.left{
    left: -40px;
    
}

</style>