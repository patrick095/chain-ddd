import { PlacarEntity } from "./domain/voleibol/entity/placar.entity";
import { VerificaGanhadorJogo } from "./infraestructure/services/verificaGanhadorJogo";
import { VerificaGanhadorSet } from "./infraestructure/services/verificaGanhadorSet";

const placar = new PlacarEntity();
const validadorSet = new VerificaGanhadorSet();
const validadorJogo = new VerificaGanhadorJogo();

// Configurando sequencia do chain
validadorSet.setNext(validadorJogo);

// Setando um valor para o placar
placar.pontosTimeA = 25;
placar.pontosTimeB = 23;
placar.setsTimeA = 2;

// Validando
const result = validadorSet.handle(placar);


// Mostrando resultado
if (!result.jogoFinalizado) {
    console.log(`
    Placar Atual: 
    Time A ${result.pontosTimeA} pontos/${result.setsTimeA} sets
     vs 
    Time B ${result.pontosTimeB} pontos/${result.setsTimeB} sets`)
} else {
    console.log(`${result.timeGanhador} Ganhou o Jogo por ${result.timeGanhador === 'Time A' ? result.setsTimeA + ' - ' + result.setsTimeB : result.setsTimeB + ' - ' + result.setsTimeA}`);
}