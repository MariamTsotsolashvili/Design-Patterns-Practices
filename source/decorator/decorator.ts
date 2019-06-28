import {IPasta} from "./index";

abstract class Pasta implements IPasta {
    public price: number;

    constructor() {
        this.price = 0;
    }

    public getPrice() {
        return this.price;
    }
}

// tslint:disable-next-line:max-classes-per-file
class Penne extends Pasta {

    constructor() {
        super();
        // tslint:disable-next-line:semicolon
        // tslint:disable-next-line:no-unused-expression
        this.price;
    }
}

// tslint:disable-next-line:max-classes-per-file
class PastaDecorator extends Pasta {

    constructor(public pasta: IPasta) {
        super();
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}

// tslint:disable-next-line:max-classes-per-file
class SauceDecorator extends PastaDecorator {

    constructor(public pasta: IPasta) {
        super(pasta);
    }
}

// tslint:disable-next-line:max-classes-per-file
class CheeseDecorator extends PastaDecorator {
    constructor(pasta: IPasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 3;
    }
}
