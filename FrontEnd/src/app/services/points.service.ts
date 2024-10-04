import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  private myApuURL:string = 'http://localhost:3001/';
  private myEndpoint:string =  'api/points';

  constructor(
    private  http: HttpClient
  ) { }

  getPointsUser():Observable<any>{
    return this.http.get(`${this.myApuURL}${this.myEndpoint}/history`);
  }
  //se manda a traer el historial de puntos asigandos o restados a  un usuario
}
