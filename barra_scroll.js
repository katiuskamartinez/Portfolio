export default function barraScroll() {
  window.addEventListener("scroll", (e) => {
    progreso();
    mostrarFoto();
    mostrarLogos();
    mostrarProyectos();
  });
  function progreso() {
    let scroll = document.documentElement.scrollTop;
    let alto =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let progreso = (scroll / alto) * 100;
    document.getElementsByClassName("barra")[0].style.width = progreso + "%";
  }
  let $animados = document.querySelectorAll(".animado");
  let $foto = document.querySelector(".foto");
  let $logos = document.querySelector(".logos");
  function mostrarFoto() {
    let scroll = document.documentElement.scrollTop;
    let alto = $foto.offsetTop;
    if (alto - 300 < scroll) {
      $foto.style.opacity = 1;
      $foto.classList.add("mostrarArriba");
    }
  }
  function mostrarLogos() {
    let desplazar = document.documentElement.scrollTop;
    let height = $logos.offsetTop;
    if (height - 350 < desplazar) {
      $logos.style.opacity = 1;
      $logos.classList.add("mostrarArriba");
    }
  }
  function mostrarProyectos() {
    let scrolltop = document.documentElement.scrollTop;
    for (let i = 0; i < $animados.length; i++) {
      let altura = $animados[i].offsetTop;
      if (altura - 500 < scrolltop) {
        $animados[i].style.opacity = 1;
        $animados[i].classList.add("mostrarArriba");
      }
    }
  }
}
