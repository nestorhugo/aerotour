import Viagem from "./viagem-class.js";
import ViagemInternacional from "./viagem-class.js";

let viagemFozDoIguacu = new Viagem("Foz do Iguaçu", "11/10/2023", 3, 909.99); //criando
viagemFozDoIguacu.exibir(); //exibindo info

let viagemFortaleza = new Viagem("Fortaleza", "16/11/2023", 4, 1439.99); //criando
viagemFortaleza.exibir(); //exibindo info

let viagemRioDeJaneiro = new Viagem("Rio de Janeiro", "25/11/2023", 3, 1299.99); //criando
viagemRioDeJaneiro.exibir(); //exibindo info

let viagemFernandoDeNoronha = new Viagem("Fernando de Noronha", "10/12/2023", 3, 5245); //criando
viagemFernandoDeNoronha.exibir(); //exibindo info

let viagemIntBuenosAires = new ViagemInternacional("Buenos Aires", "12/07/2023", 4, 159329, "ARS"); //criando
viagemIntBuenosAires.exibir(); //exibindo info internacional

