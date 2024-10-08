import { Request,Response } from "express"
import bcrypt from 'bcrypt';
import { createUser, findUserById, finUserByEmail } from "../services/userService";
import jwt from 'jsonwebtoken';
import { CustomRequest } from "../routes/decodificar-token";

export const newUser = async(req:Request,res:Response) => {
    const {nombre,email,password,rol} = req.body;

    try {
        //validar si existe el usuario
        const userExist = await finUserByEmail(email);
        if(userExist.length > 0){
            return res.status(400).json({
                mensaje: "El email ya existe"
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


export const loginUser = async (req:Request,res:Response) =>{
    const {email,password} = req.body;

    try {
        //valida si existe el usuario con el correo
        const userExist = await finUserByEmail(email);

        if(userExist.length == 0){
            return res.status(400).json({
                mensaje: `No existe el usuario con el mail ${email}`
            });
        }
        //validamos si la contraseña es la misma

        const passwordValid = await bcrypt.compare(password,userExist[0].password);
        
        if(!passwordValid){
            return res.status(400).json({
                mensaje: "Contraseña Inválida"
            })
        }

        const token = jwt.sign({
            email:email,
            id_usuario:userExist[0].id_usuario
        }, process.env.TOKEN_SECRET || 'brqd8rUYKdesqAf6xZUGT4q90epvXLB5g83Dwwl6sh9IZ4SKukd5bvYGKmxi7eQl',{
            expiresIn: '1800s'
        });

        //crea el token con jwt
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al iniciar sesión.",data:error });
    }
}

export const getDataUser = async(req:CustomRequest,res:Response) => {
    const id_usuario = req.id_usuario;

    try {
        const user = await findUserById(id_usuario);
   
        if(user.length == 0){
            return res.status(404).json({
                mensaje:'Usuario no encontrado'
            })
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            mensaje:"Error al obtener los datos del usuario.",
            error:error
        })
    }
}