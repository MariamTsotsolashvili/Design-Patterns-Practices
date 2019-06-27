import { Clone, ISheep } from "./interface";

class Sheep implements Clone<Sheep>, ISheep {

    constructor(public name: string, public weight: number) { }

    public clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep