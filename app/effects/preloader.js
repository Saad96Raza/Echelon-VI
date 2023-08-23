import EventEmitter from 'events'



export default class Preloader{

constructor(eventEmitter,loader,lines,preloaderNumber,preloader1){
this.eventEmitter = eventEmitter
this.loader = loader
this.lines = lines
this.preloaderNumber = preloaderNumber
this.preloader1 = preloader1

this.length = 0 

this.eventEmitter = new EventEmitter()

this.preloader1 = document.querySelector('.preloader-1')
this.loader = document.querySelectorAll('.loader')
this.lines = document.querySelectorAll('.line')
this.preloaderNumber =  document.querySelector('.number')
this.loadImages  = document.querySelectorAll('img')

this.createLoader()
this.addEventListener()


}

createLoader(){

this.loadImages.forEach(object => {

const  image = new Image()
image.onload = () => this.onAssetsLoaded(image)
image.src = object.getAttribute('src');

})



}

onAssetsLoaded(image){

this.length += 1


const percent =   this.length / this.loadImages.length;
this.preloaderNumber.textContent =  Math.round(percent * 100)

if (percent === 1) {

this.onload() 

} 

}


onload(){

this.eventEmitter.emit('completed')




}


scrollDisable(e){


e.preventDefault();
e.stopPropagation();

return false;

}




addEventListener(){

document.body.addEventListener('wheel',this.scrollDisable,{passive: false})    

}





}