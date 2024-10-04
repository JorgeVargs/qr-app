import { Request,Response } from "express";
import { CustomRequest } from "../routes/decodificar-token";
import { findHistoryByUser } from "../services/pointsService";

export const getPointsUser =  async (req: CustomRequest, res: Response) => {
    const id_usuario = req.id_usuario;

    try{
        const history = await findHistoryByUser(id_usuario);

        if(history.length == 0){
            return res.status(404).json(
                {message: "No se ha encontrado historial"}
            );
        }

        res.status(200).json(history);
        
    } catch(error){
        res.status(500).json({message: "Error al obtener puntos"});
    }
}