import { Request, Response } from 'express';
import { InsertNewPersonUC } from '../../business/usecase/insertNewPersonUC';
import { PersonDB } from '../../data/personDB';

export const insertNewPersonEndpoint = async(req:Request, res:Response) => {
    try{
        const insertNewPersonUC = new InsertNewPersonUC(new PersonDB())
        const result = await insertNewPersonUC.execute({
            name: req.body.name,
            age: req.body.age,
            civilStatus: req.body.civilStatus,
            cpf: req.body.cpf,
            city: req.body.city,
            state: req.body.state
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}