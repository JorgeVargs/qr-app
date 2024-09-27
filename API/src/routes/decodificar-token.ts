import { NextFunction,Request,Response } from 'express';
import jwt, { decode, JwtPayload } from 'jsonwebtoken';
import { Server } from 'mysql2/typings/mysql/lib/Server';


const secretKey = process.env.TOKEN_SECRET || 'brqd8rUYKdesqAf6xZUGT4q90epvXLB5g83Dwwl6sh9IZ4SKukd5bvYGKmxi7eQl';

export interface CustomRequest extends Request {
  id_usuario?: string;
}

// Middleware para validar y decodificar el token JWT
export const decodificarToken = (req: CustomRequest, res: Response, next: NextFunction) => {

  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ mensaje: 'No se proporcionó un token' });
  }

  try {
    // Verificar y decodificar el token
    const bearerToken = token.slice(7);

    const decoded = jwt.verify(bearerToken,secretKey) as JwtPayload;
    // Extraer el id_usuario del payload del token y agregarlo al req
    req.id_usuario = decoded.id_usuario;

    // Pasar al siguiente middleware o controlador
    next();
  } catch (err) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
};

