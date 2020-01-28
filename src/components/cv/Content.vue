<template>
     <v-container  >
          <HeaderSection></HeaderSection>
          <AboutMe></AboutMe>
          <MyIntrested></MyIntrested>
          <Ability></Ability>
          <!-- <Github></Github> -->
          <Email></Email>
          
      </v-container>
</template>
<script>
import HeaderSection from './HeaderSection'
import AboutMe from './AboutMe'
import Email from './Email'
import MyIntrested from './MyIntrested'
import Ability from './Ability'
import Github from './Github'
export default {

      components:{
       HeaderSection,
       AboutMe,
       Email,
       MyIntrested,
       Ability,
       Github,
      
    }
    
}
</script>