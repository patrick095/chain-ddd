import { AbstractHandler } from "../../domain/voleibol/abstract/AbstractHandler";
import { IPlacar } from "../../domain/voleibol/interfaces/placar.interface";

export class VerificaGanhadorJogo extends AbstractHandler {
    public handle(placar: IPlacar): IPlacar {
        const { setsPorJogo, setsTimeA, setsTimeB, setAtual } = placar;

        if (
            setsTimeA > setsTimeB &&
            setsTimeA > setsPorJogo / 2 &&
            setAtual < setsPorJogo
        ) {
            placar.jogoFinalizado = true;
            placar.timeGanhador = "Time A";
        } else if (
            setsTimeB > setsTimeA + 1 &&
            setsTimeB > setsPorJogo / 2 &&
            setAtual < setsPorJogo
        ) {
            placar.jogoFinalizado = true;
            placar.timeGanhador = "Time B";
        }

        return super.handle(placar);
    }
}
