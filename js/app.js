'use strict';
let leftImageElement=document.getElementById('leftimage');
let rightImageElement=document.getElementById('rightimage');
let middleImageElement=document.getElementById('middleimage');
// let section=document.getElementById('list');

let leftIndex;
let RightIndex;
let MiddleIndex;

let rounds=25;
let clickingNumber=0;

function BusMall (name,source){
  this.name=name;
  this.source=source;
  this.votes=0;
  this.shown=0;
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
  RightIndex=generateRandomIndex();
  MiddleIndex=generateRandomIndex();
  console.log(leftIndex);
  console.log(MiddleIndex);
  console.log(RightIndex);
  while (leftIndex===RightIndex || leftIndex===MiddleIndex || RightIndex===MiddleIndex){
    leftIndex=generateRandomIndex();
    RightIndex=generateRandomIndex();
    MiddleIndex=generateRandomIndex();
  }
  leftImageElement.src= BusMall.all[leftIndex].source;
  rightImageElement.src=BusMall.all[RightIndex].source;
  middleImageElement.src=BusMall.all[MiddleIndex].source;
  BusMall.all[leftIndex].shown++;
  BusMall.all[RightIndex].shown++;
  BusMall.all[MiddleIndex].shown++;
}
dispalyThreeImages();



function generateRandomIndex() {
  let randomIndex=Math.floor(Math.random() * BusMall.all.length);
  return randomIndex;
}
// generateRandomIndex();
// console.log(generateRandomIndex);


leftImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);
middleImageElement.addEventListener('click',handleClicking);



function handleClicking(event){
//   console.log(event.target.id);
  clickingNumber++;
  console.log(event.target.id);

  if (rounds >= clickingNumber){
    if(event.target.id==='leftimage'){
      BusMall.all[leftIndex].votes++;
      //   BusMall.all[leftIndex].shown++;
      //   clickingNumber++;
      console.log(clickingNumber);
      dispalyThreeImages();
    }else if (event.target.id==='rightimage'){
      BusMall.all[RightIndex].votes++;
      //   BusMall.all[RightIndex].shown++;
      //   clickingNumber++;
      console.log(clickingNumber);
      dispalyThreeImages();
    }else if (event.target.id==='middleimage'){
      BusMall.all[MiddleIndex].votes++;
      //   BusMall.all[MiddleIndex].shown++;
      //   clickingNumber++;
      console.log(clickingNumber);
      dispalyThreeImages();
    }}else if (clickingNumber===25){
    ibrahem();
  }
  else {
    // console.log('string');
    // list();
    leftImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    middleImageElement.removeEventListener('click',handleClicking);
  }
}


// handleClicking(Event.target.id);


// ibrahem();

function list(){
  let ul = document.getElementById('unlist');
  for (let i=0 ;i < BusMall.all.length;i++){
    let li=document.createElement('li');
    ul.appendChild(li);
    // console.log('iciubiuced');
    li.textContent = `${BusMall.all[i].name} has ${BusMall.all[i].votes} Votes and has ${BusMall.all[i].votes} shown`;
    // console.log('list');
  }
//   list();
}

function ibrahem() {
//   alert('osaid');
  list();
  let stop=document.getElementById('osaid');
  stop.setAttribute('onClick',null);
}
