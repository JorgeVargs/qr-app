import { db } from './dbService';
import { User } from '../models/userModel';

export const finUserByEmail = async(email:string) => {
   
        const [result] = await db.query<any>('SELECT id_usuario,email,password FROM usuarios WHERE email = ?',[email]);

        return result;
}


export const createUser = async(user:User) => {
    const {nombre, email, password, rol} = user;
    

    const [result] = await db.execute(
        'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?,?,?,?)',
        [nombre,email,password,rol]
    );

    return (result as any).insertId;
}

export const findUserById = async(id_usuario?:string) =>{
    try {
        const [result] = await db.query<any>('SELECT nombre,puntos_totales,rol FROM usuarios WHERE id_usuario = ?',[id_usuario]);
        return result;
    } catch (error) {
        console.log(`Error in query ${error}`)
    }
}