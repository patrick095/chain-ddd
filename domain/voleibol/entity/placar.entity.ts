import { IPlacar } from "../interfaces/placar.interface";

export class PlacarEntity implements IPlacar {
    public pontosTimeA: number;
    public pontosTimeB: number;
    public pontosPorSet: number;
    public setsTimeA: number;
    public setsTimeB: number;
    public setsPorJogo: number;
    public setAtual: number;
    public jogoFinalizado: boolean;
    public timeGanhador: string;

    constructor() {
        this.pontosTimeA = 0;
        this.pontosTimeB = 0;
        this.pontosPorSet = 25;
        this.setAtual = 1;
        this.setsPorJogo = 5;
        this.setsTimeA = 0;
        this.setsTimeB = 0;
        this.jogoFinalizado = false;
        this.timeGanhador = '';
    }
}
