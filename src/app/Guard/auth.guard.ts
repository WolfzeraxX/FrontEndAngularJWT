import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => { 
  
  const authService: AuthService = inject(AuthService);
  // const router :Router = inject(Router);
  // const protectRoutes: string[]=['/dashboard']
  // return protectRoutes.includes(state.url) && authService.estaLogado() == false ?
  // router.navigate(['/']):
  // false
   if(authService.estaLogado())
   {
     return true
  
   }
   else
   {
       const router = inject(Router);
       router.navigate(['/login'])
   }
   return false
};
