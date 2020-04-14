const disp = document.querySelector('#disp0');
const disp1 = document.querySelector('#disp1');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const tf = document.querySelector('#tf');
const ref = document.querySelector('#ref');
const topWp = document.querySelector('.top');
const botWp = document.querySelector('.bot');
const game = document.querySelector('.content');
let count = document.querySelector('#count');
high.disabled = true;
low.disabled = true;

game.addEventListener('click', function(e){
  if(e.target.id === 'play-again'){
    window.location.reload();
  }
});

const arr = [
 chi = {name: 'China', value: 1393, img: "url('imgs/china.jpg')"},
 ame = {name: 'America', value: 328, img: "url('imgs/america.jpg')"},
 srb = {name: 'Serbia', value: 7, img: "url('imgs/srb.jpg')"},
 eng = {name: 'England', value: 55, img: "url('imgs/london.jpg')"},
 rus = {name: 'Russia', value: 300, img: "url('imgs/russia.jpg')"},
 tur = {name: 'Turkey', value: 82, img: "url('imgs/turkey.jpg')"},
 swi = {name: 'Switzerland', value: 8, img: "url('imgs/swis.jpg')"},
 col = {name: 'Colombia', value: 49, img: "url('imgs/columbia.jpg')"},
 aus = {name: 'Australia', value: 24, img: "url('imgs/australia.jpg')"},
 arg = {name: 'Argentina', value: 44, img: "url('imgs/argentina.jpg')"},
 mex = {name: 'Mexico', value: 126, img: "url('imgs/mexico.jpg')"},
 aus = {name: 'Austria', value: 8, img: "url('imgs/austria.jpg')"},
 bol = {name: 'Bolivia', value: 11, img: "url('imgs/bolivia.jpg')"},
 cub = {name: 'Cuba', value: 11, img: "url('imgs/cuba.jpg')"},
 ino = {name: 'Indonesia', value: 267, img: "url('imgs/indonesia.jpg')"}
];

const arr1 = [
 fra = {name: 'France', value: 66, img: "url('imgs/france.jpg')"},
 ind = {name: 'India', value: 1353, img: "url('imgs/india.jpg')"},
 ger = {name: 'Germany', value: 83, img: "url('imgs/germany.jpg')"},
 spa = {name: 'Spain', value: 46, img: "url('imgs/spain.jpg')"},
 ita = {name: 'Italy', value: 60, img: "url('imgs/italy.jpg')"},
 cro = {name: 'Croatia', value: 4, img: "url('imgs/croatia.jpg')"},
 pol = {name: 'Poland', value: 37, img: "url('imgs/poland.jpg')"},
 egy = {name: 'Egypt', value: 98, img: "url('imgs/egypt.jpg')"},
 bra = {name: 'Brazil', value: 209, img: "url('imgs/brazil.jpg')"},
 irn = {name: 'Iran', value: 81, img: "url('imgs/iran.jpg')"},
 jpn = {name: 'Japan', value: 126, img: "url('imgs/japan.jpg')"},
 kor = {name: 'South Korea', value: 51, img: "url('imgs/korea.jpg')"},
 kon = {name: 'Congo', value: 84, img: "url('imgs/kongo.jpg')"},
 nep = {name: 'Nepal', value: 28, img: "url('imgs/nepal.jpg')"},
 ukr = {name: 'Ukraine', value: 41, img: "url('imgs/ukraine.jpg')"}
];

ref.addEventListener('click', x);
let guess = 0;
let rand = arr[Math.floor(Math.random() * arr.length)];
let rand1 = arr1[Math.floor(Math.random() * arr1.length)];
console.log(rand);

high.addEventListener('click', highFun);
low.addEventListener('click', lowFun);

function x(e){
  rand = arr[Math.floor(Math.random() * arr.length)];
  rand1 = arr1[Math.floor(Math.random() * arr1.length)];
  disp.textContent = rand.name;
  disp1.textContent = rand1.name; 

  topWp.style.backgroundImage = rand.img; 
  botWp.style.backgroundImage = rand1.img; 

  console.log(rand.value);
  console.log(rand1.value);

  high.disabled = false;
  low.disabled = false;
  tf.textContent = "";
  count.textContent = guess;
  e.preventDefault();
}
function highFun(e){
  if(rand1.value >= rand.value){
    tf.textContent = 'Good Job ' + rand1.name + ' is bigger than ' + rand.name;
    win();
  }else{
    tf.textContent = 'Sorry ' + rand1.name + ' is smaller than ' + rand.name; 
    gameOver();
  };
  e.preventDefault();
}

function lowFun(e){
  if(rand1.value <= rand.value){
    tf.textContent = 'Good Job ' + rand1.name + ' is smaller than ' + rand.name;
    win();
  }else{
    tf.textContent = 'Sorry ' + rand1.name + ' is bigger than ' + rand.name; 
    gameOver();
  };
  e.preventDefault();
}

function win(){
  guess += 1;
}

function gameOver(){
  ref.textContent = 'Start Over';
  ref.id = 'play-again';
}
