import { gsap } from "gsap"


export default class {
    
constructor(animate){

this.animate = animate 

this.animate = gsap.timeline()


this.fadeEffects  =  document.querySelectorAll('.we-creative-innovative-container p ');
this.fade = document.querySelectorAll('.fade');

this.fadeEffects.forEach(element =>{

this.fadeElement = element    
this.fadeElement.innerHTML  = this.fadeElement.textContent.replace(/\S/g,"<span>$&</span>");
this.fadeLetters = document.querySelectorAll('.we-creative-innovative-container p span');

   
})



}

blockReveal(){

return new Promise(resolve =>{


if(this.animate && this.fadeLetters && this.fade){

this.animate.to('.block span',{
x:0,
duration:2,
stagger:0.050,
ease:"Power4.easeInOut"

},"-=2")

this.animate.fromTo(this.fadeLetters,{
opacity:0  
},{
opacity:1,
duration:1,
stagger:0.040,
ease:"Power4.easeInOut"
},"-=2")

this.animate.to(':root',{
'--circleLine':0,
duration:3,
ease:"Expo.easeInOut",
},"-=3.5");

this.animate.to(this.fade,{
opacity:1,
duration:1,
stagger:0.2,
ease:"Power2.easeInOut",
y:0
},"-=2.5")





}


resolve()


})

}


async createComponents(){

await this.blockReveal()    

}

}