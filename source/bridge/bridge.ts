import {
    IInk,
    IPrinter,
} from "./interface";

abstract class Printer {

    constructor(public ink: Ink) {}
}

class EpsonPrinter extends Printer implements IPrinter {
    constructor(ink: Ink) {
        super(ink);
    }

    public print(): string {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}


class HPpinrter extends Printer implements IPrinter {
    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

abstract class Ink implements IInk {

    constructor(public type: string) {
    }

    public get() {
        return this.type;
    }
}

class AcrylincInc extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class Alcoholink extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {Ink};