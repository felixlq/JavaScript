//Input dos valores utilizando a bibleioteca readline-sync >> https://www.npmjs.com/package/readline-sync
var readlineSync = require('readline-sync')
var inputnum1 = readlineSync.question('Digite o primeiro numero: ')//o input é feito como String
var inputnum2 = readlineSync.question('Digite o segundo numero: ')//
var num1 = Number(inputnum1)//convertendo String em Number
var num2 = Number(inputnum2)//

//Function retornando valor do operador a ser utilizado 
function inputOperador(){
    return readlineSync.question('Selecione a operacao que voce deseja realizar: [+ , - , x , /] ')
}

//Function para determinar qual operação será realizada
function calculadora(){
    switch(inputOperador()) { //Chamada da função inputOperador
        case '+':
            soma(num1, num2)
            break
        case '-':
            subt(num1, num2)
            break
        case 'x':
            mult(num1, num2)
            break
        case '/':
            divi(num1, num2)
            break        
}
}    

//Arrow Functions para cálculo das operações
var soma = (a, b) => console.log(num1 + num2)
var subt = (a, b) => console.log(num1 - num2)
var mult = (a, b) => console.log(num1 * num2)
var divi = (a, b) => console.log(num1 / num2)

//Chamada da função calculadora
calculadora()
