import { Request, Response } from 'express';
import { GetPersonsUC } from '../../business/usecase/getPersonsUC';
import { PersonDB } from '../../data/personDB';

export const getPersonsEndpoint = async(req: Request, res: Response) => {
    try{
        const getPersonsUC = new GetPersonsUC(new PersonDB())
        const result = await getPersonsUC.execute()

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}