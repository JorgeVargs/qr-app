import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-jugador',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './new-jugador.component.html',
  styleUrl: './new-jugador.component.scss'
})
export class NewJugadorComponent {
  nombre:string = '';
  email:string = '';
  password:string = '';
  confirmPassword:string = '';

  constructor(
    private toastr:ToastrService,
    private _userService:UserService,
    private router:Router
  ){}

  addPlayer(){
    //validación que los campos tengan contenido
    if(this.nombre == "" || this.email == ""  || this.password == "" || this.confirmPassword == ""){
      this.toastr.error('Todos los campos son obligatorios','Error');

      return;
    }


    //validación de los password sean iguales 
    if(this.password != this.confirmPassword){
      this.toastr.error('Los password deben ser iguales','Error');
      return;
    }

    const user:User = {
      nombre:this.nombre,
      email:this.email,
      password:this.password,
      rol:2
    }

    this._userService.signIn(user).subscribe({
      next: (res) => {
        this.toastr.success(`El correo ${this.email} fue registrado con éxito`,'Usuario Registrado');
        this.router.navigate(['/'])
      },
      error:(e:HttpErrorResponse) =>{

        this.toastr.error(e.error.mensaje,'Error')
      },
      complete: ()=> console.info('complete')
    })


  }

}
