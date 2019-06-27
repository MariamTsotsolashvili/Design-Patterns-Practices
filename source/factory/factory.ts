import {Cartype,IBMW} from "./interface/index";
class BmwFactory {
    static create(type:Cartype) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}
class Bmw implements IBMW {
    constructor(public model:Cartype, public price:number, public maxSpeed:number) {
    }
}

export default BmwFactory;
