import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Geraldo", 11122233309);
const cliente2 = new Cliente("Anna", 22233344409);

const contaCorrenteGeraldo = new ContaCorrente(1001, cliente1);

contaCorrenteGeraldo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteGeraldo.transferir(valor, conta2);

console.log(ContaCorrente.numeroContas);