<template>
    <v-row justify="center">
        <v-col md="6" sm="6">
            <v-img class="d-block" gradient="21deg, rgba(2,0,0,.9), rgba(255,0,0,0) 70.71% " max-height="400" max-width="600" src="../../assets/images/laravel.jpg"></v-img>
            
        </v-col>
        <v-col md="4" sm="12">
            <v-card
                :class="cardclass"
                color="#0A192F"
                raised
                dark
                max-width="400"
              >
                <v-card-title>
                  <v-btn icon href="https://github.com/taylorotwell">
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
                  "Making developers happy.Creator of @laravel."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="../../assets/images/tom-taylor.jpg"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title> Taylor Otwell</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-icon class="mr-1">mdi-star</v-icon>
                      <span class="subheading mr-2 mt-2">56k</span>
                      <span class="mr-1 ">·</span>
                      <v-icon class="mr-2 ">mdi-share-variant</v-icon>
                      <span class="subheading mt-2">45</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
        </v-col>

    </v-row>




         

   
</template>

<script>

export default {

  computed:{
    cardclass() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return {'uncover':true};
      case 'md': return {'cover':true};
      case 'sm': return {'uncover':true};
      case 'lg': return {'cover':true};
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
    top:32px;
    left: -40px;
}
.uncover{
  font-size: 10px;
}

</style>