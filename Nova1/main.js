
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto

 for (let contador = 0;contador < listaDeTeclas.length;contador++)  {

 const tecla = listaDeTeclas[contador];
 const instrumento = tecla.classList[1];
 console.log(instrumento);

 const idAudio = '#som_${instrumento}'

  listaDeTeclas[contador].onclick = function() {
    tocaSom('idAudio');    
  }

 console.log(contador);
}