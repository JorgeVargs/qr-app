import { NextFunction,Request,Response } from "express";
import jwt from 'jsonwebtoken';

const validateToken = (req:Request,res:Response,next:NextFunction) => {

    const headerToken = req.headers['authorization'];

    if(headerToken != undefined && headerToken.startsWith('Bearer')){

        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken,process.env.TOKEN_SECRET || 'brqd8rUYKdesqAf6xZUGT4q90epvXLB5g83Dwwl6sh9IZ4SKukd5bvYGKmxi7eQl');
            next();
        } catch (error) {
            res.status(401).json({
                mensaje:'token no válido'
            })
        }
    }else{
        res.status(401).json({
            mensaje:'Unauthorized'
        })
    }
}

export default validateToken;