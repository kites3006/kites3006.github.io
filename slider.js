let images=[
    "images/lr1.jpg",
    "images/bedroom.jpg",
    "images/door.jpg",
    "images/kitchen.jpg",
    "images/livingroom.jpg",
    "images/interiorFashion.jpg",
    "images/interiordesign.jpg",
    "images/design.png"

];
let num=0;
let i=0;
let time=30000;


function next(){
    let slider=document.getElementById('slider1');
    num++;
    if(num>=images.length){
        num=0;
    }
    slider1.src=images[num];
}
function previous(){
    let slider=document.getElementById('slider1');
    num--;
    if(num<0){
        num=images.length-1;
    }
    slider1.src=images[num];
}

