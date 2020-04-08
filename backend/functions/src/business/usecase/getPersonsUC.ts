import { PersonDB } from "../../data/personDB";

export class GetPersonsUC {
    constructor(private db:PersonDB){}

    public execute(){
        return this.db.getPersons()
    }
}