import {IDroid, Kind} from "./interface/index";

// tslint:disable-next-line:no-shadowed-variable
function droidProducer(Kind: Kind): () => IDroid {
    if (Kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

class B1 implements IDroid {
    public info() {
        return "B1, Battle Droid";
    }
}

// tslint:disable-next-line:max-classes-per-file
class Rx24 {
    public info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;
