import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './points.component.html',
  styleUrl: './points.component.scss'
})
export class PointsComponent {
  constructor(
    private router: Router
  ){}
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
