'use strict'
let leftImageElement=document.getElementById('leftimage');
let rightImageElement=document.getElementById('rightimage');
let middleImageElement=document.getElementById('middleimage')

let leftIndex;
let RightIndex;
let MiddleIndex;
let rounds=5;
let clickingvote=0;

function BusMall (name,source){
    this.name=name;
    this.source=source;
    this.votes=0;
BusMall.all.push(this);
}

BusMall.all=[];

new BusMall('bag','../img/bag.jpg');
new BusMall ('banana','../img/banana.jpg');
new BusMall('bathroom','../img/bathroom.jpg');
new BusMall ('boots','../img/boots.jpg');
new BusMall('breakfast','../img/breakfast.jpg');
new BusMall ('bubblegum','../img/bubblegum.jpg');
new BusMall('chair','../img/chair.jpg');
new BusMall ('cthulhu','../img/cthulhu.jpg');
new BusMall('dog-duck','../img/dog-duck.jpg');
new BusMall ('dragon','../img/dragon.jpg');
new BusMall('pen','../img/pen.jpg');
new BusMall ('pet-sweep','../img/pet-sweep.jpg');
new BusMall('scissors','../img/scissors.jpg');
new BusMall ('shark','../img/shark.jpg');
new BusMall('sweep','../img/sweep.png');
new BusMall ('tanunraun','../img/tauntaun.jpg');
new BusMall('unicorn','../img/unicorn.jpg');
new BusMall ('usb','../img/usb.gif');
new BusMall('water-can','../img/water-can.jpg');
new BusMall ('wine-glass','../img/wine-glass.jpg');

console.log(BusMall.all);

function dispalyThreeImages() {
    leftIndex=generateRandomIndex();
    MiddleIndex=generateRandomIndex();
    RightIndex=generateRandomIndex();
    console.log(leftIndex);
    console.log(MiddleIndex);
    console.log(RightIndex);
    while (leftIndex===RightIndex || leftIndex===MiddleIndex || RightIndex===MiddleIndex){
        leftIndex=generateRandomIndex();
        RightIndex=generateRandomIndex();
    }
    leftImageElement.src= BusMall.all[leftIndex].source;
    rightImageElement.src=BusMall.all[RightIndex].source;
    middleImageElement.src=BusMall.all[MiddleIndex].source;
}
dispalyThreeImages();



function generateRandomIndex() {
let randomIndex=Math.floor(Math.random() * BusMall.all.length);
return randomIndex;
}
console.log(generateRandomIndex);


leftImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);
middleImageElement.addEventListener('click',handleClicking);
function handleClicking(event){
console.log(event.target.id);

}