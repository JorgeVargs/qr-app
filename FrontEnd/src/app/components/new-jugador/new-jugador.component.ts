import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-jugador',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-jugador.component.html',
  styleUrl: './new-jugador.component.scss'
})
export class NewJugadorComponent {
  nombre:string = '';
  email:string = '';
  password:string = '';
  confirmPassword:string = '';

  constructor(
    private toastr:ToastrService
  ){}

  addPlayer(){
    if(this.nombre == "" || this.email == ""  || this.password == "" || this.confirmPassword == ""){
      this.toastr.error('Todos los campos son obligatorios','Error');

      return;
    }
  }

}
