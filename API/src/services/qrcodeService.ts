import { db } from "./dbService";
import { QrCode } from "../models/qrcodesModel";

export const createQrcode = async(qrcode:QrCode) => {
    const {codigo,tipo,descripcion,puntos_asociados} = qrcode;

   
    const [result] = await db.execute(
        'INSERT INTO qrcodes (codigo,tipo,descripcion,puntos_asociados) VALUES (?,?,?,?)',
        [codigo,tipo,descripcion,puntos_asociados]
    )

    return (result as any).insertId;
}

export const findQrcode =  async(codigo:string) => {
  
    const [result] = await db.query<any>('SELECT * FROM qrcodes WHERE codigo = ?',[codigo]);

    return result;
}

export const getAllqr = async()=>{//obtiene toda la lista de códigos qr en la base de datos
    const [result] = await db.query<any>('SELECT * FROM qrcodes');

    return result;
}


export const updatePointsUser = async(id_usuario:string,puntos:number)=>{
    
    const [result] = await db.execute(
        `UPDATE usuarios SET puntos_totales = puntos_totales + ${puntos}  WHERE id_usuario = ?`,
        [id_usuario]
    )

    return (result as any).insertId;
}

export const regHistory = async(id_usuario:string,id_qr:number,puntos:number) => {
    const [result] = await db.execute(
        `INSERT INTO puntos (id_usuario,id_qr,cantidad) VALUES (?,?,?)`,
        [id_usuario,id_qr,puntos]   
    )

    return (result as any).insertId;
}

