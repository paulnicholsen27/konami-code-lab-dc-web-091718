const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let keyCount = 0;

function init() {
  document.body.addEventListener("keydown", konamiChecker)
}

function konamiChecker(e) {
  console.log(e.key)
  if (e.key == codes[keyCount]) {
    keyCount++
  } else {
    keyCount = 0
  }
  console.log(keyCount)
  if (keyCount == 4) {
    alert("yay")
  }
}