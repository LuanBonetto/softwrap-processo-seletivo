export class Person {
    constructor(
        private name:string,
        private age: number,
        private civilStatus:string,
        private cpf:string,
        private city:string,
        private state:string
        
    ){}

    public getName():string {
        return this.name
    }

    public getAge():number {
        return this.age
    }

    public getCivilStatus():string {
        return this.civilStatus
    }

    public getCPF():string {
        return this.cpf
    }

    public getCity():string {
        return this.city
    }

    public getState():string {
        return this.state
    }
}