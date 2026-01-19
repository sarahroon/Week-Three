// TIMER - using setInterval

function say(Hello) {
  console.log("Hello world!");
}

const myInterval = setInterval(() => {
  console.log("I`m a message!");
},  1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 5000);

// BOMB TIMER - using setTimeout

const bombTimer = setTimeout(() => {
  console.log("BOOM!")
}, 1000);

// DEFUSE BOMB TIMER

const defuse = document.getElementById("defuseBtn");
defuse.addEventListener("click", () => {
  clearTimeout(bombTimer);
});

// ARRAY

const images = {
  {
  src: "image link",
  alt: "image description",
};
{
  src: "image link",
  alt: "image description",
};
{
  src: "image link",
  alt: "image description",
};




