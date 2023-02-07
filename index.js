function view() {
  //mudando o icone
  const element = document.querySelector('.active360');
  const div = document.querySelector('.wrapperImage')
  div.setAttribute("onclick", "closeView()");
  element.style = "display: none";
  document.querySelector('.close360').style = "display: flex";
  
  //mudando a imagem
  const latImage = document.querySelector('.imageContainer > svg')
  latImage.style = "display: none"
  const newImg = document.querySelector('iframe')
  newImg.style = "display: flex"
}

function closeView() {
  //mudando o icone
  const element = document.querySelector('.close360');
  element.style = "display: none";
  document.querySelector('.active360').style = "display: flex";
  const div = document.querySelector('.wrapperImage')
  div.setAttribute("onclick", "view()");

  //mudando a imagem
    const latImage = document.querySelector('iframe')
  latImage.style = "display: none"
  const newImg = document.querySelector('.imageContainer > svg')
  newImg.style = "display: flex"
}