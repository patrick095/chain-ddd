export interface IPlacar {
    pontosTimeA: number;
    pontosTimeB: number;
    pontosPorSet: number;
    setsTimeA: number;
    setsTimeB: number;
    setsPorJogo: number;
    setAtual: number;
    jogoFinalizado: boolean;
    timeGanhador?: string;
}
