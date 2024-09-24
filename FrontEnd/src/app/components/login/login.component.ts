import { Component } from '@angular/core';
import { QrLectorComponent } from "../qr-lector/qr-lector.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [QrLectorComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
