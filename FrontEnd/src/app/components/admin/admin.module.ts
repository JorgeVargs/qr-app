import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { QrcodeService } from '../../services/qrcode.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    QRCodeModule
  ],
  providers: [QrcodeService]
})
export class AdminModule { }
