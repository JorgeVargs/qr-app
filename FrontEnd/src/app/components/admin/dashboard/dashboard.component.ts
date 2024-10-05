import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { ListqrComponent } from "../listqr/listqr.component";
import { QrcodeService } from '../../../services/qrcode.service';
import { FormBuilder, FormGroup, Validators,FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ListqrComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  formulario:FormGroup;
  updateList: boolean = false;

  constructor(
    private _qrService:QrcodeService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
  ){
    this.formulario = this.formBuilder.group({
      codigo:['',Validators.required],
      tipo:['',Validators.required],
      descripcion:['',Validators.required],
      puntos:['',Validators.required]
    });
  }

  
  ngOnInit(): void {
  }

  submit(){
    if(this.formulario.valid){

      this._qrService.newQr(this.formulario.value).subscribe({
        next:(res)=>{
          this.toastr.success('QR creado con exito');
          this.formulario.reset();
          this.hideDialog();
          this.updateList = true;
        },
        error:(err:HttpErrorResponse)=>{
          this.toastr.error(err.error.mensaje,'Error');
        }
      })
    }else{
      this.toastr.error("Verifica los campos, todos son obligatorios","Error")
    }
  }

  showDialog(){
    const element = document.getElementById('dialog');
    element?.classList.remove('hidden');
    
    setTimeout (() => {
      element?.classList.add('opacity-100')
    },100)
  }

  hideDialog(){
    const element = document.getElementById('dialog');
    element?.classList.add('opacity-0');
    element?.classList.remove('opacity-100');
    setTimeout (() => {
     
      element?.classList.add('hidden');
    },100)
  }
}
