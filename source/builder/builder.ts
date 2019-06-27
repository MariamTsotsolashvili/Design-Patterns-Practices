import {IRequest,} from "./inderface";

class Request implements IRequest {

    constructor(public url: string = "", public method: string = "", public payload: object = {}) {}
}

class RequestBuilder extends Request {
    public request: Request;
    constructor() {
        super();
        this.request = new Request();
    }

    public forUrl(url: string): RequestBuilder {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string): RequestBuilder {
        this.request.method = method;
        return this;
    }

    public payLoad(payload: object): RequestBuilder {
        this.request.payload = payload;
        return this;
    }

    public build(): Request {
        return this.request;
    }
}

const test = new RequestBuilder();
console.log(test.forUrl("text").useMethod("text2").payLoad({
    id: 500,
}).build());