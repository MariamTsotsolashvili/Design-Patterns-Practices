import {
    IInk,
    IPrinter,
} from "./interface";

abstract class Printer {

    constructor(public ink: Ink) {}
}

// tslint:disable-next-line:max-classes-per-file
class EpsonPrinter extends Printer implements IPrinter {
    constructor(ink: Ink) {
        super(ink);
    }

    public print(): string {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

// tslint:disable-next-line:max-classes-per-file
class HPpinrter extends Printer implements IPrinter {
    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

// tslint:disable-next-line:max-classes-per-file
abstract class Ink implements IInk {

    constructor(public type: string) {
    }

    public get() {
        return this.type;
    }
}

// tslint:disable-next-line:max-classes-per-file
class AcrylincInc extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

// tslint:disable-next-line:max-classes-per-file
class Alcoholink extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {Ink};
