import Aladino from "../../aladino/src/index.js";
import Pointer from "../../aladino/docs/assets/pointer.js";
import lerp from "../../aladino/docs/assets/lerp.js";

import pointerVertex from '../effects/glsl/pointerVertex.glsl'
import pointerFragment from '../effects/glsl/pointerFragment.glsl'




export default class{

constructor(aladino,pointer,canvas){

this.aladino = aladino
this.pointer = pointer
this.canvas =  canvas


this.createPointer()
this.createPointerMaterial()


}

createPointer(){

this.pointer = new Pointer();

this.aladino = new Aladino({

density: 100,

});


document.body.appendChild(this.aladino.canvas);


}

createPointerMaterial(){

this.PointerMaterial = this.aladino.material({
    
vertex:pointerVertex,
fragment: pointerFragment,

});

this.texture = []

this.pointerImages = [...document.querySelectorAll('.pointer__wrapper')]

this.pointerInteraction = Array.from(this.pointerImages).map((el)=>{

this.aladino.carpet(el, {

material:this.PointerMaterial,

uniforms: {

image: this.aladino.texture(el.querySelector("img").src),
pointer: [0, 0],

},

})


this.texture.push(this.aladino)

return  this.texture;


})



}


createPointerUpdate(){


this.pointerInteraction.forEach((element,index)=>{
   
    let uniformArray = [];


    let _element = element[index];
    let elementObjectArray = Object.entries(_element);
    let carpetKeyValuePair = elementObjectArray.find(x => x[0] === "carpets");
    if(carpetKeyValuePair){
        let carpertValueMapObject = carpetKeyValuePair[1];
        let carpertValueArray = [...carpertValueMapObject.values()];
        for (const i of carpertValueArray) {
            let b = Object.entries(i);
            let c = b.find(x => x[0] === 'uniforms');
            if(c){
                let _uniform = c[1];
                uniformArray.push(_uniform);
            }
        }
    }
   

this.smooth = 0.4;

uniformArray[index].pointer[0] = lerp(

uniformArray[index].pointer[0],
this.pointer.ndc[0],
this.smooth

);

uniformArray[index].pointer[1] = lerp(

uniformArray[index].pointer[1],
this.pointer.ndc[1],
this.smooth

);



})    




}

}