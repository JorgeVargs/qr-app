import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private myApiURL:string = 'http://localhost:3001/';
  private myEndpoint:string = 'api/qrcodes';

  constructor(
    private http:HttpClient
  ) { }

  scanQr(qrcode:string):Observable<any>{
    return this.http.post(`${this.myApiURL}${this.myEndpoint}/escanea`,{
      qrcode:qrcode
    });
  }
}
