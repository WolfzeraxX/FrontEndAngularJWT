import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarComponent } from './Components/registrar/registrar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [{

    path: 'login',
    component: LoginComponent
}, {
    path: 'registrar', 
    component: RegistrarComponent
},{
    path:'dashboard', 
    component:DashboardComponent,
    canActivate: [authGuard]
},{
    path:'',
    redirectTo: 'login',
    component:LoginComponent
}

];
