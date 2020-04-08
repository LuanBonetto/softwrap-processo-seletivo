import { PersonDB } from "../../data/personDB";

export class GetPersonsUC {
    constructor(private db: PersonDB) { }

    public async execute(): Promise<any>{
        try{
            return await this.db.getPersons()
        }catch(err) {
            throw {
                code: err.statusCode || 400,
                message: err.message || 'Algum erro ocorreu durante a requisição'
            }
        }
    }
}