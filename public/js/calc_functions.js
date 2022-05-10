function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 15) return;
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    valor1 = parseFloat(display.value);
    display.value += operador;
}

function calcularOperacao(){
    const display = document.getElementById('display');
    //const valor2 = parseInt(display.value);
    //console.log(valor1+operador+valor2);
    valor1 = eval(display.value);
    display.value = valor1;
    operador = '';
}


function raiz(){
    const display = document.getElementById('display');
    valor1 = parseFloat(display.value);
    display.value = Math.sqrt(valor1);
}

function exponenciacao(){
    const display = document.getElementById('display');
    valor1 = parseFloat(display.value);
    display.value = valor1**2;
}

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}
