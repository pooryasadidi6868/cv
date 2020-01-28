<template>
    <div >
        <v-row  justify="center" class="mt-12" >
            
           
           <v-col    md="1" sm="5" ><p id="AboutMe" class="title">01.AboutMe</p></v-col>
           <v-col sm="6" xs="6" md="5"><v-divider class="mt-3"   ></v-divider></v-col>
            
        </v-row>

        <v-row >
        <v-col offset="1"  md="6" >
            <p >
                Hello! I'm Pooria sadidi, a software engineer based in Tehran,
                who enjoys building things that live on the internet.
                I develop Back-End websites and web apps that provide intuitive,
                pixel-perfect user interfaces with efficient and modern backends.
                Shortly after graduating from Gonbad-kavoos University,

            </p>    
            <p>
                  Until now I worked as a freelancer and had no experience working with a team:
            </p>
            <br>
            <br>
             <p>
               Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
            </p>
          
          
        </v-col>
        <v-col class="mx-5" justify-self>
          <v-img  gradient="120deg, rgba(48, 3, 134, 0.7), rgba(27, 166, 112, 0.5) 70.71%, rgba(27, 166, 112, 0.9)"  class="filter" max-height="300" max-width="300" src="../../assets/images/mee.jpg"></v-img>
        </v-col>
         
          
        
        <!-- <v-col md="3" xs="12">
            <Programer></Programer>
        </v-col> -->
        </v-row>
    </div>
</template>

<script>

export default {

    
    
}
</script>

<style scoped>
.divider-color{
    background-color: #14FCD5;
}
.filter{
    overflow: visible;
    z-index: 1;
}
.filter::after{
 content: '';
  position: relative;
 border:  4px solid #14FCD5;
 display: block;
 top: 25px;
 left: 30px;
 width: 300px;
 height: 300px;
 z-index: -2;
 animation: move 2s ease-in-out

}
.filter::after:hover{
    
}
.border{
    position: absolute;
    border: 5px cyan;
    border-radius: 50%;
    z-index:1
}
@keyframes move{
    from{
        left: 25px;
        top: 25px ;
        }
    to{
        left: 13px;
        top: 13px ;
        }
}
</style>