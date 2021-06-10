'use strict';
let leftImageElement=document.getElementById('leftimage');
let rightImageElement=document.getElementById('rightimage');
let middleImageElement=document.getElementById('middleimage');


let ul = document.getElementById('unlist');







let leftIndex;
let RightIndex;
let MiddleIndex;

let rounds=25;
let clickingNumber=0;

let arrOfImages=[];
let arrOfNames=[];


let newArr=[];

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
// console.log(savingData);
console.log(arrOfShown);

console.log(arrOfNames);
console.log(arrOfImages);
BusMall.all=[];
console.log(BusMall.all);
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


// this function to display the images. 
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

  console.log(newArr);


  leftImageElement.src= BusMall.all[leftIndex].source;
  BusMall.all[leftIndex].shown++;
  rightImageElement.src=BusMall.all[RightIndex].source;
  BusMall.all[RightIndex].shown++;
  middleImageElement.src=BusMall.all[MiddleIndex].source;
  BusMall.all[MiddleIndex].shown++;

}

dispalyThreeImages();


// this function is to get a random number for the images.
function generateRandomIndex() {
  let randomIndex=Math.floor(Math.random() * BusMall.all.length);
  return randomIndex;
}
leftImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);
middleImageElement.addEventListener('click',handleClicking);





// this function is to make sure that if the user clicked the image it will increase the votes and clicking number
function handleClicking(event){
  clickingNumber++;
  console.log(event.target.id);

  if (rounds >= clickingNumber){
    if(event.target.id==='leftimage'){
      BusMall.all[leftIndex].votes++;
      dispalyThreeImages();
    }else if (event.target.id==='rightimage'){
      BusMall.all[RightIndex].votes++;
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
    savingData();

  }
}




// function to save data
function savingData(){
  let convertedArr=JSON.stringify(BusMall.all);
  localStorage.setItem('unlist',convertedArr);


}


// is to convert the array to array of objects
function runningLs(){
  let data=localStorage.getItem('unlist');
  // console.log(data);
  let parsedUnlist=JSON.parse(data);
  console.log(parsedUnlist);
  if (parsedUnlist){
    BusMall.all=parsedUnlist;

  }



}


// this function is to list the inputs from the user.
function list(){

  ul.textContent = '' ;

  for (let i=0 ;i < BusMall.all.length;i++){
    arrOfShown.push(BusMall.all[i].shown);
    arrOfVotes.push(BusMall.all[i].votes);
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.all[i].name} has ${BusMall.all[i].votes} Votes and has ${BusMall.all[i].shown} shown .`;
    ul.appendChild(li);
  }
}


// button click me 
function button() {
  list();
  startingChart();
  let stop=document.getElementById('btn');
  stop.setAttribute('onClick',null);
}

// chart function 
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
runningLs();
