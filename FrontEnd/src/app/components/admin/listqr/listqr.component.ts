import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { QrcodeService } from '../../../services/qrcode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PointsService } from '../../../services/points.service';
import { CommonModule } from '@angular/common';
import { DeleteQrComponent } from "../crudQr/delete-qr/delete-qr.component";
import { GenerateqrComponent } from "../generateqr/generateqr.component";

@Component({
  selector: 'app-listqr',
  standalone: true,
  imports: [CommonModule, DeleteQrComponent, GenerateqrComponent],
  templateUrl: './listqr.component.html',
  styleUrl: './listqr.component.scss'
})
export class ListqrComponent implements OnChanges{

  @Input() updateData: boolean  = false;

  
  listQr:any[] = [];
  constructor(
    private _qrService: QrcodeService
  ) {}

  ngOnInit(): void {
    this.getListQr();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updateData'].currentValue) {
      this.getListQr()
    }
  }


  getListQr(){

     this._qrService.getListQr().subscribe({
      next: (data: any) => {
        this.listQr = data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    });
  }

}
