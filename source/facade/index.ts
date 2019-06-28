interface IShopFacade {
    discount: IDiscount;
    shipping: IShiping;
    fees: IFees;
}

interface IDiscount {
    calc(valuse: number): number;
}

interface IShiping {
    calc(): number;
}

interface IFees {
    calc(value: number): number;
}

export {IFees, IShiping, IDiscount, IShopFacade};
