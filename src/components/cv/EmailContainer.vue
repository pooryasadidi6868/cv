<template>
    <div :class="hideclass" class="d-inline-flex hidden-sm-and-down flex-column pl-5 v">
     <strong class="my-gmail hover caption py-4">pouriasadidi6868@gmail</strong>  
     
     <div class="line mr-2 mt-2">
     </div>
      
   
    </div>
</template>
<style scoped>
.v{
    position: fixed;
    top:350px;
    right:30px ;
}
.line{
    height: 170px;
    width: 1px;
    background-color: #B6BAC1
}
.my-gmail{
    font-family: SFMono;
    font-size: 12px;
    letter-spacing: 0.5px;
    writing-mode: vertical-rl;
}
.hide{
    opacity: 0;
}
.hover:hover{
    animation: spin 0.9s linear ;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    cursor:pointer;
    color: aquamarine
}
@keyframes spin {
  100% {
      
      color: aquamarine
       }
}
</style>
<script>
export default {
      computed:{
    hideclass() {
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

  
