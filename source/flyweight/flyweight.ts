import {IColor} from "./index";

class Color {
    constructor(public name: string) {}
}

// tslint:disable-next-line:max-classes-per-file
class ColorFactory {
    public colors: IColor;

    constructor(name: string) {
        // tslint:disable-next-line:semicolon
        this.colors = {}
    }

    public create(name: string) {
        const color = this.colors[name];
        if (color) {
            return color;
        }
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {Color};
