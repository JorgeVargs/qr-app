import { User } from "../models/userModel";
import { db } from "./dbService";

export const findHistoryByUser = async(id_user:any) => {
    const [result] = await db.query<any>('SELECT fecha, id_usuario, tipo, cantidad FROM history_points WHERE id_usuario = ? ORDER BY fecha DESC', [id_user])

    return result;
}