export class User {
    constructor(public firstNAme: string,
        public lastName: string,
        public email: string,
        public drinkPreference: string,
        public hobbies?: string[]) { }
}
