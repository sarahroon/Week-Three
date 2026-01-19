// TIMER - using setInterval for a regular-interval timer

function say(Hello) {
  console.log("Hello world!");
}

const myInterval = setInterval(() => {
  console.log("I`m a message!");
},  1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 5000);

// BOMB TIMER - using setTimeout for a countdown-style timer

const bombTimer = setTimeout(() => {
  console.log("BOOM!")
}, 5000);

// DEFUSE BOMB TIMER

const defuse = document.getElementById("defuseBtn");
defuse.addEventListener("click", () => {
  clearTimeout(bombTimer);
});




