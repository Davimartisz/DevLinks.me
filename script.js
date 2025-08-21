//troca fundo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/light.jpeg")
  } else {
    //se tiver dark mode deixar imagem
    img.setAttribute("src", "./assets/avatar dark2.jpg")
  }
}
