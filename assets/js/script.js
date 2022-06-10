/* 
Atividade em aula

var numberWrapper = document.getElementById('number');
var number = 0;

function increment(){
    number = number + 1;
    numberWrapper.innerHTML = number;
}

function decrement(){
    number = number - 1;
    numberWrapper.innerHTML = number;
}*/



//com addEventListener e alteração de cor quando negativo.

var count = 0;
var number = document.getElementById('number');
const incrementar = document.getElementById('aumentar');
const decrementar = document.getElementById('diminuir');

incrementar.addEventListener("click",
    function increment() {
        count++;
        if (count <= 10) {
            number.innerHTML = count;
        } if (count >= 0) {
            number.style = "color: black;"
        }
    }
);

decrementar.addEventListener("click",
    function increment() {
        count--;
        if (count >= -10) {
            number.innerHTML = count;
        } if (count < 0) {
            number.style = "color: red;"
        }
    }
);
