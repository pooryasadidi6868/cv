<template>
     <div>
         <Header1></Header1>
         <EmailContainer></EmailContainer>
         <social-container></social-container>
         <Content></Content>
         <Footer></Footer>
         
     </div>
  

</template>



<script>
import Header1 from '../base/Header1'
import Content from '../cv/Content'
import Footer from "../cv/Footer"
import EmailContainer from "../cv/EmailContainer"
import SocialContainer from "../cv/SocialContainer"
import Text from "../icon/Text"

export default {
    
    components:{
       Header1,
       Content,
       Footer,
       EmailContainer,
       SocialContainer,
       Text
      
       
    }
    }
</script>

