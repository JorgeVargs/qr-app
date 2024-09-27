import express, { Application } from "express";
import mysql from 'mysql2/promise';
import cors from 'cors';

import routesUser from '../routes/routesUser';
import routesQr from '../routes/routesQrcode';

export class Server{
    private app:Application;
    private port:string;

    constructor(){
        this.app = express();//se instancia expres
        this.port = process.env.PORT || '3000';//se coloca el puerto por el cual estará corriendo
        this.listen();
        this.middlewares();//debe de ir antes de las rutas
        this.routes();
        // this.dbConnection();
    }

    listen(){
        //se inicializa el servidor
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })
    }

    routes(){
        this.app.use('/api/users',routesUser);
        this.app.use('/api/qrcodes',routesQr);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors())
    }
}
