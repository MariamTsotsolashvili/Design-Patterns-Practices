class Car {
    public drive() {
        return "driving";
    }
}

// tslint:disable-next-line:max-classes-per-file
class CarProxy {
    constructor(public driver: Driver) {}
    public drive(): string {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

// tslint:disable-next-line:max-classes-per-file
class Driver {
    constructor(public age: number) {}
}
