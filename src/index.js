import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3);
const magoJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7, 15);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroJorge = new Guerreiro('Jorge', 8)

// arqueiroBruno.#level = 15
const personagens = [magoAntonio, magoJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJorge];
console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio));

new PersonagemView(personagens).render()

console.log(guerreiroJorge)

// const personagemMago = new Mago('Pedra', 10, 100);
// console.log(personagemMago)
// console.log(new Mago('gelo', 7, 9))