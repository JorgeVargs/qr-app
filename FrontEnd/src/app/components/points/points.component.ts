import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './points.component.html',
  styleUrl: './points.component.scss'
})
export class PointsComponent {
  nombre:string;
  puntos:number;

  constructor(
    private router: Router,
    private _userService:UserService
  ){
    this.nombre = '';
    this.puntos = 0;
    this.showData();
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  showData(){
    const user = this._userService.getDataUser().subscribe({
      next: (data) => {
        this.nombre = data[0].nombre;
        this.puntos = data[0].puntos_totales;
      }
    });
  }
}
