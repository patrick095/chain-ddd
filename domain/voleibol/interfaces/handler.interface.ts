import { IPlacar } from "./placar.interface";

export interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: IPlacar): IPlacar;
}