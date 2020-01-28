<template>
<svg id="vue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260">
    <path  fill-opacity="0" stroke="#42b883" stroke-width="6" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"/>
    <path  fill-opacity="0" stroke="#42b883" stroke-width="6" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"/>
</svg>
</template>

<script>
import Vivus from 'vivus'
export default {
      mounted(){
         new Vivus('vue', {duration: 310,type: 'oneByOne',animTimingFunction: Vivus.EASE_OUT, delay: 100});
    
    },
    
}
</script>