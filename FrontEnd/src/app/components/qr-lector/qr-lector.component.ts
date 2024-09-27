import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerModule,ZXingScannerComponent } from '@zxing/ngx-scanner';
import { QrcodeService } from '../../services/qrcode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qr-lector',
  standalone: true,
  imports: [ZXingScannerModule,RouterLink,CommonModule],
  templateUrl: './qr-lector.component.html',
  styleUrl: './qr-lector.component.scss'
})


export class QrLectorComponent {
  @ViewChild('scanner')
  scanner!: ZXingScannerComponent;
  allowedFormats = [ BarcodeFormat.QR_CODE,BarcodeFormat.CODABAR];

  hideElement:boolean = false;

  constructor(
    private _qrcodeservice:QrcodeService,
    private toastr:ToastrService
  ){}


  onScanSuccess(result: string) { 
    console.log('Código QR escaneado:', result);
    //envìa a la api el valor oara poder

    this._qrcodeservice.scanQr(result).subscribe({
      next: (data) => console.log(data),
      error:(e:HttpErrorResponse) =>{
        this.toastr.error(e.error.mensaje,'Error')
      },
      complete: ()=> {
        this.toastr.success('Código QR leído con éxito','Éxito');
        this.scanner.scanStop();
        this.hideElement = true; 
      }
    })
    
  }

  scanFailure(result:string){
    console.log('Error al escanear:', result);
  }

  onScanError(res:any){
    console.log('Error al escanear:', res);
    this.toastr.error("Intenta nuevamente","Error");
  }

  camerasNotFound(res:any){
    console.log('Error en camara: ', res);
    this.toastr.error("No se encontraron cámaras","Error");
;  }
}
