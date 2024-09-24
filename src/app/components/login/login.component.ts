import { Component } from '@angular/core';
import { QrLectorComponent } from "../qr-lector/qr-lector.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [QrLectorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
