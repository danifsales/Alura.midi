
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();    
    }
    else {
        //alert ('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

} 

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //.length irá mostrar o tamanho da lista

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // .classList irá armazenar todas as classes que contém o elemento
    const idAudio = `#som_${instrumento}`;   //template string esse tipo de variante com id

    tecla.onclick = function () { // fuction sem descrição é uma função anônima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { // . onkeydown é a função que é habilitada no momento em que a tecla do teclado está pressionada
        
        console.log(evento.code)

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); // ativa está relacionada ao CSS que ativa a a classe (no classlist não precisa colocar . na classe)
        }
        
    }  

    tecla.onkeyup = function () { // .onkeyup é o contrário de onkeydown, qdo a tecla é solta
        tecla.classList.remove('ativa');
    }

}