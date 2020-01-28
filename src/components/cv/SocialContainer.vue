<template>
    <div :class=" hideiconclass" class="d-inline-flex  flex-column pl-5 v">
      <v-btn icon href="https://github.com/pooryasadidi6868" id="hi" class="hover">  <v-icon  class="pa-4 " medium>mdi-github-circle</v-icon></v-btn>   
      <v-btn icon href="https:/t.me/poorya644" id="hi" class="hover">  <v-icon  class="pa-4 " medium>mdi-telegram</v-icon></v-btn>   
      <v-btn icon href="https://instagram/pooryasadidi6868" id="hi" class="hover">  <v-icon  class="pa-4 " medium>mdi-instagram</v-icon></v-btn>   
      <v-btn icon href="https://codepen" id="hi" class="hover">  <v-icon  class="pa-4 " medium>mdi-codepen</v-icon></v-btn>   
  
     <div class="line ml-7 ">
     </div>
      
      
    
   
     
     
   
    </div>
</template>
<style >
.v{
    position: fixed;
    top:350px;
}
.line{
    height: 160px;
    width: 1px;
    background-color: #B6BAC1
}
.hide{
    opacity: 0;
}
.hover:hover{
    animation: spin 0.5s linear ;
    animation-iteration-count: infinite;
    cursor:pointer;
    color: aquamarine
}
@keyframes spin {
  100% {
      transform: translateY(-8px);
      color: aquamarine
       }
}
    

</style>
<script>
export default {
      computed:{
    hideiconclass() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return {'hide':true};
      case 'md': return {'hide':false};
      case 'sm': return {'hide':true};
      case 'lg': return {'hide':false};
    }
  }
  } 
}
</script>