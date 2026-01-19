const bombTimer = setTimeout(() => {
  console.log("BOOM!")
}, 5);

const defuse = document.getElementById("defuseBtn");
defuse.addEventListener("click", () => {
  clearTimeout(bombTimer);
});
