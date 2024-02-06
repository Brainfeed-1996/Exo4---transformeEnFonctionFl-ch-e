const btn = document.querySelector("button");
const texte = document.querySelector("#texteParagraphe01");

btn.addEventListener("click", () => {
  texte.innerHTML = "John";
});

console.log(btn);
