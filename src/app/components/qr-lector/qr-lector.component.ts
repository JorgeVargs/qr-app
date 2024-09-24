import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerModule,ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-lector',
  standalone: true,
  imports: [ZXingScannerModule,RouterLink],
  templateUrl: './qr-lector.component.html',
  styleUrl: './qr-lector.component.scss'
})
export class QrLectorComponent {

  allowedFormats = [ BarcodeFormat.QR_CODE,BarcodeFormat.CODABAR];


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
