const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", (e) => {
  const size = e.target.value;
  text.style.fontSize = `${size}px`;
});

