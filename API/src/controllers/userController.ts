import { Request,Response } from "express"
import bcrypt from 'bcrypt';
import { createUser, finUserByEmail } from "../services/userService";

export const newUser = async(req:Request,res:Response) => {
    const {nombre,email,password,rol} = req.body;

    try {
        //validar si existe el usuario
        const userExist = await finUserByEmail(email);
        if(userExist){
            return res.status(400).json({
                mensaje: "El usuario ya existe"
            })
        }

        //encriptar contraseña
        const hashedPassword = await bcrypt.hash(password,10);

        //crear usuario

        const newIuserId = await createUser({
            nombre,email,password:hashedPassword,rol
        })

        return res.status(201).json({
            mensaje: "Usuario creado con exito",
            idUser: newIuserId
        })


    } catch (error) {
        console.log(`Error: ${error}`)
    }

    res.json({
        mensaje:"registro de usuario",
    })
}


export const loginUser = (req:Request,res:Response) =>{
   
    
    try {
        //valida si existe el usuario con el correo

        //vcalida si la contraseña es la misma

        //crea el token con jwt
        res.status(200).json({ mensaje: "Inicio de sesión exitoso" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al iniciar sesión." });
    }
}

export const getUser = (req:Request,res:Response) => {
    res.json({
        mensaje:"get data user"
    });
}