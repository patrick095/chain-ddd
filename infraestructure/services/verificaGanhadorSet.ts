import { AbstractHandler } from "../../domain/voleibol/abstract/AbstractHandler";
import { IPlacar } from "../../domain/voleibol/interfaces/placar.interface";

export class VerificaGanhadorSet extends AbstractHandler {
    public handle(placar: IPlacar): IPlacar {
        const { pontosPorSet, pontosTimeA, pontosTimeB } = placar;

        if (
            pontosTimeA > pontosTimeB + 1
            && pontosTimeA >= pontosPorSet
            ) {
            placar.pontosTimeA = 0;
            placar.pontosTimeB = 0;
            placar.setsTimeA++;
            placar.setAtual++;
        } else if (
            pontosTimeB > pontosTimeA + 1 &&
            pontosTimeB >= pontosPorSet
        ) {
            placar.pontosTimeA = 0;
            placar.pontosTimeB = 0;
            placar.setsTimeB++;
            placar.setAtual++;
        }

        return super.handle(placar);
    }
}
