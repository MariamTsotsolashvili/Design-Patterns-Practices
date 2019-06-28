import { Jedi } from "../adapter";

export interface IJediAdapter {
    jedi: Jedi;
    attack(): number;
}
export interface ISoldier {
    level: number;
    attack(): number;
}
export interface IJedi {
    level: number;
    attackWithSaber(): number;
}
