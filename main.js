const color = [
  "#c0ffee",
  "#cacaca",
  "salmon",
  "#ee6e73",
  "limegreen"
];

const btn = document.querySelector(".btn");


function acakWarna(){
  let n = Math.floor((Math.random() * color.length));    
  this.innerHTML = color[n]
  document.body.style.background = color[n];
}

btn.addEventListener('click', acakWarna)