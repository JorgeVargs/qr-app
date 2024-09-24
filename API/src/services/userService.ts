import { db } from './dbService';
import { User } from '../models/userModel';

export const finUserByEmail = async(email:string) => {
    try {
        const [rows] = await db.query('SELECT COUNT(*) AS count FROM usuarios WHERE email = ?',[email]);
        
        const count = (rows as any[])[0].count;

        return count;
        
    } catch (error) {
        console.log(`Error in query ${error}`)
    }
}


export const createUser = async(user:User) => {
    const {nombre, email, password, rol} = user;
    

    const [result] = await db.execute(
        'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?,?,?,?)',
        [nombre,email,password,rol]
    );

    return (result as any).insertId;

}