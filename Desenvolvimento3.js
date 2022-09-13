/* Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, 
tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta. */


class Banco {
    constructor(nome, agencia, conta, tipoConta, saldo) {
        this.nome = nome
        this.agencia = agencia
        this.conta = conta
        this.tipoConta = tipoConta
        this.saldo = saldo
    }    

    getNumeroConta(){
        return console.log(`Nome: ${this.nome} Agência: ${this.agencia}; Conta: ${this.conta}; Tipo: ${this.tipoConta}`)
    }

    getBuscarSaldo(){
        return console.log(`Saldo atual: ${this.saldo}`)
    }
    getDeposito(){
        this.saldo = this.saldo + valorParaDeposito
        return  console.log(`Depósito confirmado: ${valorParaDeposito} \nSaldo Atual: ${this.saldo}`)
    }
    getSaque(){
        this.saldo = this.saldo - valorParaSaque
        return  console.log(`Saque confirmado: ${valorParaSaque} \nSaldo Atual: ${this.saldo}`)
    }
}

//valortes Mocados para saque e depósitos
let valorParaSaque = 300
let valorParaDeposito = 2500


//Objetos - Clientes
let cliente = new Banco("João Felix", "3422", "5553312", "CC", 15000 )

//Chamada dos métodos
cliente.getNumeroConta()
cliente.getBuscarSaldo()
cliente.getDeposito()
cliente.getSaque()
cliente.getBuscarSaldo()