import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerModule,ZXingScannerComponent } from '@zxing/ngx-scanner';
import { QrcodeService } from '../../services/qrcode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qr-lector',
  standalone: true,
  imports: [ZXingScannerModule,RouterLink],
  templateUrl: './qr-lector.component.html',
  styleUrl: './qr-lector.component.scss'
})
export class QrLectorComponent {

  allowedFormats = [ BarcodeFormat.QR_CODE,BarcodeFormat.CODABAR];

  constructor(
    private _qrcodeservice:QrcodeService,
    private toastr:ToastrService
  ){
    console.log('constructor lector qr');

    console.log(
      this._qrcodeservice.scanQr('123456DsrV').subscribe({
        next: (data) => console.log(data),
        error:(e:HttpErrorResponse) =>{
          this.toastr.error(e.error.mensaje,'Error')
        },
        complete: ()=> console.info('complete')
      })
    )
    
  }

  onScanSuccess(result: string) {
    console.log('Código QR escaneado:', result);
    //envìa a la api el valor oara poder
    
  }

  scanFailure(result:string){
    console.log('Error al escanear:', result);
  }

  onScanError(res:any){
    console.log('Error al escanear:', res);
  }

  camerasNotFound(res:any){
    console.log('Error en camara: ', res)
;  }
}
