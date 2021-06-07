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

let arrOfImages=[];
let arrOfNames=[];


let newArr=[];
// newArr.includes[leftIndex,RightIndex,MiddleIndex];
// arrOfNames.reverse();
// console.log(arrOfNames);
let arrOfVotes=[];
let arrOfShown=[];
function BusMall (name,source){
  this.name=name;
  this.source=source;
  this.votes=0;
  this.shown=0;
  BusMall.all.push(this);
  arrOfImages.push(this.source);
  arrOfNames.push(this.name);

}
console.log(arrOfShown);

console.log(arrOfNames);
console.log(arrOfImages);
BusMall.all=[];
console.log(BusMall.all);
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

// console.log(BusMall.all);
// console.log(arrOfImages.includes('../img/bag.jpg'));
// console.log(arrOfImages.includes('bag'));
// console.log(arrOfNames.includes('dragon'));


// reverse.include[leftIndex];


function dispalyThreeImages() {
  leftIndex=generateRandomIndex();
  RightIndex=generateRandomIndex();
  MiddleIndex=generateRandomIndex();
  console.log(leftIndex);
  console.log(MiddleIndex);
  console.log(RightIndex);

  while (leftIndex===RightIndex || leftIndex===MiddleIndex || RightIndex===MiddleIndex || newArr.includes(leftIndex) || newArr.includes(RightIndex) || newArr.includes(MiddleIndex)){
    leftIndex=generateRandomIndex();
    RightIndex=generateRandomIndex();
    MiddleIndex=generateRandomIndex();
  }
  newArr=[leftIndex,RightIndex,MiddleIndex];
  // console.log( newArr.includes(leftIndex) );
  // newArr[0]=leftIndex;
  // console.log(newArr[0]);
  // newArr[1]=RightIndex;
  // console.log(newArr[1]);
  // newArr[2]=MiddleIndex;
  // console.log(newArr[2]);

  // console.log(n);
  

  console.log(newArr);


  leftImageElement.src= BusMall.all[leftIndex].source;
  BusMall.all[leftIndex].shown++;
  rightImageElement.src=BusMall.all[RightIndex].source;
  BusMall.all[RightIndex].shown++;
  middleImageElement.src=BusMall.all[MiddleIndex].source;
  BusMall.all[MiddleIndex].shown++;

}

dispalyThreeImages();



function generateRandomIndex() {
  let randomIndex=Math.floor(Math.random() * BusMall.all.length);
  return randomIndex;
}
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
      // console.log(clickingNumber);
      dispalyThreeImages();
    }else if (event.target.id==='rightimage'){
      BusMall.all[RightIndex].votes++;
      // console.log(clickingNumber);
      dispalyThreeImages();
    }else if (event.target.id==='middleimage'){
      BusMall.all[MiddleIndex].votes++;
      console.log(clickingNumber);
      dispalyThreeImages();
    }}else if (clickingNumber===25){
    button();
  }
  else {
    leftImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    middleImageElement.removeEventListener('click',handleClicking);
  }
}


// handleClicking(Event.target.id);


// Button();

function list(){
  let ul = document.getElementById('unlist');
  for (let i=0 ;i < BusMall.all.length;i++){
    arrOfShown.push(BusMall.all[i].shown);
    arrOfVotes.push(BusMall.all[i].votes);
    let li=document.createElement('li');
    ul.appendChild(li);
    // console.log('iciubiuced');
    li.textContent = `${BusMall.all[i].name} has ${BusMall.all[i].votes} Votes and has ${BusMall.all[i].shown} shown .`;
    // console.log('list');
  }
//   list();
}

function button() {
//   alert('osaid');
  list();
  startingChart();
  let stop=document.getElementById('btn');
  stop.setAttribute('onClick',null);
}


function startingChart(){

  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrOfNames,
      datasets: [{
        label: '# of Votes',
        data: arrOfVotes,
        backgroundColor: [
          'rgba(100, 420, 132, 2)',
        ],
        borderWidth:1
      },{
        label: '# of shown',
        data: arrOfShown,
        backgroundColor: [
          'rgba(500, 120, 200, 0.9)',

        ],
        borderWidth:5
      }
      ]
    },
  });
}
