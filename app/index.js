import Intersect from "./effects/intersection"
import Text from "./effects/text"
import Wave from "./effects/aladino"
import Preloader from "./effects/preloader"




window.addEventListener("DOMContentLoaded",()=>{



class App{

constructor(){




this.createWebgl()
this.createPreloder()

}

createWebgl(){

this.effects ={

    
wave : new Wave(),    
text : new Text({animate:this.animate}),
scroll : new Intersect(),



} 




}



createPreloder(){

this.preloader = new Preloader({

eventEmitter: this.eventEmitter,
loader:this.loader,
lines:this.lines,
preloaderNumber:this.preloaderNumber,
preloader1:this.preloader1

})

this.preloader.eventEmitter.on('completed',()=>this.loadComplete())

}

loadComplete(){



if (this.preloader.preloaderNumber) {
this.effects.text.animate.fromTo(this.preloader.preloaderNumber,{
opacity:1
},{
opacity:0,
y:-50,
duration:1,
ease:"Power4.easeInOut"   
})   
    
}



if (this.preloader.lines) {

this.effects.text.animate.to(this.preloader.lines,{
height:0,
duration:1.5,
ease:"Expo.easeOut"

})




}


if (this.preloader.loader) {

this.effects.text.animate.to(this.preloader.loader,{
height:0,
duration:2,
stagger:0.1,
ease:"Expo.easeOut"

})

}





if (this.preloader.preloader1) {
    
this.effects.text.animate.to(this.preloader.preloader1,{
    
height:0,
duration:0.5,
ease:"Power4.easeInOut",

onComplete:()=>{

document.body.removeEventListener('wheel',this.preloader.scrollDisable)

}

})


}



this.effects.text.createComponents()



    
}





}


new App()



    
})