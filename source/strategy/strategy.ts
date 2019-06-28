import {Content, TStrategy} from "./index";

class ShoppingCart implements Content {
    public amount: number = 0;

    constructor(public discount: TStrategy) {}

    public checkout(): number {
        return this.discount(this.amount);
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }
}

const guestStrategy: TStrategy = (amount: number) => {
    return amount;
};

const regularStrategy: TStrategy = (amount: number) => {
    return amount * 0.9;
};

const premiumStrategy: TStrategy = (amount: number) => {
    return amount * 0.8;
};
