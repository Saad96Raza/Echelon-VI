import Aladino from "../../aladino/src/index.js";
import  Pointer from '../effects/pointer.js'
import lerp from "../../aladino/docs/assets/lerp.js"
import media from "./media";

import vertexShader from "../effects/glsl/vertexShaders.glsl"
import fragmentShader from "../effects/glsl/fragmentShaders.glsl"


export default class Wave{
constructor(){


this.canvas = document.querySelector('canvas');   

this.createLenis()

this.createAladino()
this.createAladinoMaterial()
this.createAladinoPosition()
this.createPointerEffects()

this.update()

}

createLenis(){

this.media = new media({
lenis:this.lenis,
images:this.images

})


    
}


createAladino(){

this.aladino = new Aladino({

canvas: this.canvas,
dpr: Math.min(devicePixelRatio, 2),

density: 20,
attribs: { antialias: true,alpha:true,premultipliedAlpha: false},


});



}

createAladinoMaterial(){


this.material = this.aladino.material({

vertex: vertexShader,
fragment:fragmentShader

,
uniforms: {
speed: 0,
},
});


this.media.images.forEach((el, index) => {

this.aladino.carpet(el, {
    
material:this.material,
uniforms: {

image: this.aladino.texture(el.src),

},

});

});






}

createAladinoPosition(){


this.oldPos = this.aladino.y;
this.speed = 0;

}



createPointerEffects(){

this.pointer =  new Pointer({

aladino:this.aladino,
pointer: this.pointer,
canvas:this.canvas

})


}

update(time){


this.speed = (this.aladino.y - this.oldPos) * 0.1;

this.material.uniforms.speed = lerp(
this.material.uniforms.speed,
this.speed * 0.2,
0.06

);

this.pointer.createPointerUpdate()

this.oldPos = this.aladino.y;
    
this.media.lenis.raf(time)
window.requestAnimationFrame(this.update.bind(this))    

}

}