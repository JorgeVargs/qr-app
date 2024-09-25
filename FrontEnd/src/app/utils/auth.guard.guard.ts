import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  console.log(token);

  if(token === undefined || token === null){
    router.navigate(['/']);
    return false;
  }
  
  return true;
};
