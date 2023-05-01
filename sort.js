const num = 60;
const array = [];
const array2 = [];
//Array for bubble sort
init();
let audioCtx = null;
//audio
function playNote(freq) {
  if (audioCtx == null) {
    audioCtx = new (AudioContext ||
      webkitAudioContext ||
      window.webkitAudioContext)();
  }
  const dur = 0.1;
  const osc = audioCtx.createOscillator();
  osc.frequency.value = freq;
  osc.start();
  osc.stop(audioCtx.currentTime + dur);
  const node = audioCtx.createGain();
  node.gain.value = "0.1";
  node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
  osc.connect(node);
  node.connect(audioCtx.destination);
}

//In it function for bublesort
function init() {
  for (let i = 0; i < num; i++) {
    array[i] = Math.trunc(Math.random() * 22) + 1;
  }
  showBars();
}
console.log(array);
//play function for bublesort

function play() {
  const copy = [...array];
  const swaps = bublesort(copy);
  animate(swaps);
}
//Animation
function animate(swaps) {
  if (swaps.length == 0) {
    showBars();
    return;
  }
  const [i, j] = swaps.shift();
  [array[i], array[j]] = [array[j], array[i]];
  showBars([i, j]);
  playNote(200 + array[i] * 500);
  playNote(200 + array[i] * 500);
  setTimeout(function () {
    animate(swaps);
  }, 10);
}

//Bubble Sort function
function bublesort(array) {
  const swaps = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        swapped = true;
        swaps.push([i - 1, i]);
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  } while (swapped);
  return swaps;
}

//show bar function
function showBars(inc) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 22 + "px";
    bar.classList.add("bar");
    if (inc && inc.includes(i)) {
      bar.style.backgroundColor = "red";
    }
    container.appendChild(bar);
  }
}
//------------------------------------------------------merge sort-------------------------------------->
iny();

function iny() {
  for (let i = 0; i < num; i++) {
    array2[i] = Math.trunc(Math.random() * 22) + 1;
  }
  show();
}

function pl() {
  copy = [...array2];
  swaps = bublesort(copy);
  animate1(swaps);
}

function animate1(swaps) {
  if (swaps.length == 0) {
    return;
  }
  [i, j] = swaps.shift();
  [array2[i], array2[j]] = [array2[j], array2[i]];
  show([i, j]);
  playNote(200 + array[i] * 500);
  setTimeout(function () {
    animate1(swaps);
  }, 10);
}

console.log(array2);

function show(inc) {
  container_2.innerHTML = "";
  for (let i = 0; i < array2.length; i++) {
    const bar2 = document.createElement("div");
    bar2.style.height = array2[i] * 22 + "px";
    bar2.classList.add("bar2");
    if (inc && inc.includes(i)) {
      bar2.style.backgroundColor = "lightgreen";
    }
    container_2.appendChild(bar2);
  }
}
