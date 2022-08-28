import { Handler } from "../interfaces/handler.interface";
import { IPlacar } from "../interfaces/placar.interface";

export abstract class AbstractHandler implements Handler {
    private nextHandler?: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: IPlacar): IPlacar {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return request;
    }
}
