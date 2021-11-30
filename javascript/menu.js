const btnMobile = document.querySelector('#btn-mobile')

function abrirMenu() {
  console.log( "clicou ")
  const nav = document.querySelector('#nav')
  nav.classList.toggle('active')
  
  const html = document.querySelector("html")
  html.classList.toggle('fixou');
}
btnMobile.addEventListener("click", abrirMenu);
btnMobile.addEventListener("touchStart", abrirMenu);


