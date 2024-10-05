import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { QrcodeService } from '../../services/qrcode.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AdminRoutingModule
    
  ],
  providers: [QrcodeService]
})
export class AdminModule { }
