class Person {
    private static instance: Person;

    constructor() {
        if (Person.instance) {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;
