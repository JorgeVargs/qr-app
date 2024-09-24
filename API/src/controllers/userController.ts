import { Request,Response } from "express"
import bcrypt from 'bcrypt';

export const newUser = async(req:Request,res:Response) => {

       
    const {name,email,password,rol} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);


    res.json({
        mensaje:"registro de usuario",
        password:hashedPassword
    })
}


export const loginUser = (req:Request,res:Response) =>{
    res.json({
        mensaje:"login de usuario"
    })
}

export const getUser = (req:Request,res:Response) => {
    res.json({
        mensaje:"get data user"
    });
}