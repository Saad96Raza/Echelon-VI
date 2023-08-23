

import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis'



export default class{
constructor({lenis,images}){


this.lenis = lenis
this.images = images

this.images = [...document.querySelectorAll('.section-3 img')]



this.lenis = new Lenis({

easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
wheelMultiplier:1,
duration:1.2,
autoResize:true,
smooth:true,
direction:"vertical",
gestureDirection:"vertical"


})


}







}