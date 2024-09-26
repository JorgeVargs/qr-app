import { Request, Response } from "express"
import { createQrcode, findQrcode, getAllqr, regHistory, updatePointsUser } from "../services/qrcodeService";

export const newQrCode = async (req: Request, res: Response) => {
    const { codigo, tipo, descripcion, puntos } = req.body;

    try {
        const qrexists = await findQrcode(codigo);

        if (qrexists.length > 0) {
            return res.status(400).json({
                mensaje: "El código QR ya existe"
            })
        }

        const newqr = await createQrcode({
            codigo, tipo, descripcion, puntos_asociados: puntos
        })

        return res.status(201).json({
            mensaje: "Código QR creado con éxito"
        })

    } catch (error) {
        console.log(`Erro: ${error}`)
        return res.status(500).json({
            mensaje: "Error al crear código QR"
        })
    }
}

export const getQrcodes = async (req: Request, res: Response) => {

    try {
        const listCodes = await getAllqr();

        res.json(listCodes);

    } catch (error) {
        return res.status(400).json({
            mensaje: "Error al obtener la lista de códigos QR"
        })
    }
}

export const scanCode = async (req: Request, res: Response) => {
    const { id_usuario, qrcode } = req.params;

    //validar si existe el código qr leido, si existe se obtiene id_qr,tipo, valor
    try {
        const qr = await findQrcode(qrcode);

        if (qr.length == 0) {
            return res.status(400).json({
                mensaje: 'El código no existe'
            })
        }

        let points: number = qr[0].puntos_asociados;

        //validar el tipo de puntos

        if (qr[0].tipo == 'DOBLE') {
            points = points * 2;
        } else if (qr[0].tipo == 'TRIPLE') {
            points = points * 3;
        }

        //preguntar si está funcionalidad está bien
        await updatePointsUser(id_usuario, points);
        await regHistory(id_usuario,qr[0].id_qr,points);

        return res.status(201).json({
            mensaje: 'se ha registrado correctamente los puntos'
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: "Error al registrar el código QR",
            error
        })
    }
}