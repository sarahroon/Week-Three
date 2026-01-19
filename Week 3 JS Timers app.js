const bombTimer = setTimeout(() => {
  console.log("BOOM!")
}, 5);

// DEFUSE BOMB TIMER

const defuse = document.getElementById("defuseBtn");
defuse.addEventListener("click", () => {
  clearTimeout(bombTimer);
});
