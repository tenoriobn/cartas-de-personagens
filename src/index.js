import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render()

console.log(personagemJose.vida)

// const personagemMago = new Mago('Pedra', 10, 100);
// console.log(personagemMago)
// console.log(new Mago('gelo', 7, 9))