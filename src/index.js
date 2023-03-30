import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3);
const magoJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7, 15);

const personagens = [magoAntonio, magoJulia, arqueiroBruno];

new PersonagemView(personagens).render()

// const personagemMago = new Mago('Pedra', 10, 100);
// console.log(personagemMago)
// console.log(new Mago('gelo', 7, 9))