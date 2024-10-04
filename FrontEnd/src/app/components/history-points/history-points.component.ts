import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../services/points.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history-points',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './history-points.component.html',
  styleUrl: './history-points.component.scss'
})
export class HistoryPointsComponent implements  OnInit {

  history:any[] = [];

  constructor(
    private _pointsService:PointsService,
    private toastr:ToastrService
  ){}

  ngOnInit(): void {
    this.showHistory()
  }

  showHistory(){
    const history = this._pointsService.getPointsUser().subscribe({
      next: (data) => {
        this.history = data
      },
      error: (e:HttpErrorResponse) => {
        this.toastr.error(e.error.mensaje,'Error');
      }
    });
  }

}
