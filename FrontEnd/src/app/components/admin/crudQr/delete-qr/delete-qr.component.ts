import { Component, Input } from '@angular/core';
import { Qr } from '../../../../interfaces/qr';
import { QrcodeService } from '../../../../services/qrcode.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-qr',
  standalone: true,
  imports: [],
  templateUrl: './delete-qr.component.html',
  styleUrl: './delete-qr.component.scss'
})
export class DeleteQrComponent {
  @Input() qrCode = '';

  constructor(
    private _qrcodeService:QrcodeService
  ){}

  deleteQr(){
      const qr_id = this.qrCode;
    
      this._qrcodeService.delQr(qr_id).subscribe({
        next: (res) => {
          console.log(res)
        },
        error:(err:HttpErrorResponse) =>{
          console.log(err.error.mensaje)
        }
      })
  }
}
