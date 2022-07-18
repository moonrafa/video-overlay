// MDN
// O evento DOMContentLoaded é acionado quando o documento HTML inicial for completamente carregado, sem esperar que os stylesheets, imagens etc terminem de carregar.
// O evento load é acionado quando a página inteira é carregada, incluindo todos os recursos dependentes, como stylesheets e imagens.

const button = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

button.addEventListener('click', function () {
  if (!button.classList.contains('slide')) {
    button.classList.add('slide')
    video.pause()
  } else {
    button.classList.remove('slide')
    video.play()
  }
})

//preloader

const preloader = document.querySelector('.preloader')

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader')
})
