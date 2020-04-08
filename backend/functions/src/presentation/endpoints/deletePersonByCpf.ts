import { Request, Response } from 'express';
import { DeletePersonByCpfUC } from '../../business/usecase/deletePersonByCpfUC';
import { PersonDB } from '../../data/personDB';

export const deletePersonByCpfEndpoint = async(req: Request, res: Response) => {
    try{

        const deletePersonByCpfUC = new DeletePersonByCpfUC(new PersonDB())
        const response = await deletePersonByCpfUC.execute({
            cpf: req.params.cpf
        })

        res.status(200).send(response)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}