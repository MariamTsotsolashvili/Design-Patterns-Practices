import { ISoldier } from "./interface";
import { IJedi } from "./interface";
import { IJediAdapter } from "./interface";

export class Soldier implements ISoldier {
    constructor(public level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}

export class Jedi implements IJedi {
    constructor(public level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements IJediAdapter {
    constructor(public jedi: Jedi) {
        this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}
