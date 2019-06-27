import {IInfo,Kind} from "./interface/index"

function droidProducer(Kind:Kind):() =>IInfo {
    if (Kind === 'battle'){
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
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;
