import { gsap } from "gsap";

export default class Intersect{
constructor(){

this.scrollText = document.querySelectorAll(".intersect");

this.scrollTextLetter = document.querySelectorAll(".intersect");


this.scrollBlockReveal =  document.querySelectorAll('.block__reveal')
this.scrollTextLetter.forEach(element=>element.innerHTML = element.textContent.replace(/\S/g,"<span>$&</span>"))



this.createFadeEffects()
this.createBlockRevealEffects()

}

createFadeEffects(){

this.observerFade =  new IntersectionObserver(element=>{

element.forEach(elements =>{

if (elements.isIntersecting > 0){

this.t = elements.target.querySelectorAll('span');

gsap.fromTo(this.t,{opacity:0},{opacity:1,stagger:0.050,duration:3})
this.observerFade.unobserve(elements.target);

}


}) 

})

this.scrollText.forEach(scrollText=>{this.observerFade.observe(scrollText)})


}


createBlockRevealEffects(){


this.observeBlockReveal = new IntersectionObserver(element =>{

element.forEach(elements=>{

if (elements.isIntersecting > 0) {

this.b = elements.target.querySelectorAll('span');

gsap.to(this.b,{x:0,duration:2,ease:"Power4.easeInOut"})
this.observeBlockReveal.unobserve(elements.target);


}

})


})

this.scrollBlockReveal.forEach((scrollBlockReveal)=>{this.observeBlockReveal.observe(scrollBlockReveal)})

}


}