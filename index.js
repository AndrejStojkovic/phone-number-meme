function load() {
  for(let i = 1; i <= 999; i++) {
    let opt = document.createElement('option');
    opt.value = i.toString();
    document.getElementById('select11').appendChild(opt);
  }

  for(let i = 1; i <= 999; i++) {
    let opt = document.createElement('option');
    opt.value = i.toString();
    document.getElementById('select12').appendChild(opt);
  }

  for(let i = 1; i <= 999; i++) {
    let opt = document.createElement('option');
    opt.value = i.toString();
    document.getElementById('select13').appendChild(opt);
  }

  for(let i = 1; i <= 9999; i++) {
    let opt = document.createElement('option');
    opt.value = i.toString();
    document.getElementById('select14').appendChild(opt);
  }
}

function slider(el1, el2) {
  document.getElementById(el1).innerHTML = document.getElementById(el2).value;
}

function leftArrow(el) {
  if(Number(document.getElementById(el).innerHTML) > 0)
    document.getElementById(el).innerHTML = Number(document.getElementById(el).innerHTML) - 1;
}

function rightArrow(el, max) {
  if(Number(document.getElementById(el).innerHTML) < max)
    document.getElementById(el).innerHTML = Number(document.getElementById(el).innerHTML) + 1;
}

function genInt(el, max) {
  document.getElementById(el).innerHTML = generateRandomInteger(max);
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}