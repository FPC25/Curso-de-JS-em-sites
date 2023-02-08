function tocaSom (idElementoAudio){
	const elemento = document.querySelector(idElementoAudio);

	if (elemento && elemento.localName === 'audio') {
			elemento.play();
	}
	else {
		console.log(`Elemento ${idElementoAudio} nãp encontrado ou seletor inválido.`);
	}
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
	
	const tecla = listaTeclas[i];
	const instrumento = tecla.classList[1];
	const idAtudio = `#som_${instrumento}`// template string é o nome dessa string dinamica 

	tecla.onclick = function () { //declaração de função anônima para q o som não seja executada ao ler o arquivo
		tocaSom(idAtudio);
	}

	tecla.onkeydown = function (evento) {
		if (evento.code === "Enter" || evento.code === "Space") { 
			tecla.classList.add('ativa');
		}
	}
	tecla.onkeyup = function () {
		tecla.classList.remove('ativa');
	}
 }
