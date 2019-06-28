import {IDiscount, IFees, IShiping, IShopFacade} from "./index";

class ShopFacade implements IShopFacade {

    constructor(public discount = new Discount(), public shipping = new Shipping(), public fees = new Fees()) {}

    public calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

// tslint:disable-next-line:max-classes-per-file
class Discount implements IDiscount {

    public calc(value: number) {
        return value * 0.9;
    }
}

// tslint:disable-next-line:max-classes-per-file
class Shipping implements IShiping {

    public calc() {
        return 5;
    }
}

// tslint:disable-next-line:max-classes-per-file
class Fees implements IFees {

    public calc(value: number) {
        return value * 1.05;
    }
}
