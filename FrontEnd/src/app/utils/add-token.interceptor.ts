import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router'

@Injectable()
export class addTokenInterceptor implements HttpInterceptor {
  constructor(
    private router:Router
  ){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if(token){
      req = req.clone({
        setHeaders:{
          'Authorization':`Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse) =>{
        if(error.status === 401){
          console.log(error);
          this.router.navigate(['/'])
        }
        return throwError(()=> error);
      })
    )
  }
};
