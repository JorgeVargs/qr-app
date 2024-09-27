import { Component } from '@angular/core';
import { QrLectorComponent } from "../qr-lector/qr-lector.component";
import { RouterLink,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [QrLectorComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string = '';
  password:string = '';

  constructor(
    private toastr:ToastrService,
    private _userService:UserService,
    private router:Router
  ){}

  login(){
    if(this.email == '' || this.password == ''){
      this.toastr.error('Todos los campos son obligatorios','Error')
      return;
    }

    const user:User ={
      email:this.email,
      password:this.password
    }


    this._userService.logIn(user).subscribe({
      next:(token)=>{
        localStorage.setItem('token',token);
        this.router.navigate(['/points'])
      },
      error:(e:HttpErrorResponse) => {
        console.log(e)
        this.toastr.error(e.error.mensaje,'Error')
      }
    })


  }
}
