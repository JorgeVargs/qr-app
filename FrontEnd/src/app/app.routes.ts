import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PointsComponent } from './components/points/points.component';
import { QrLectorComponent } from './components/qr-lector/qr-lector.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { NewJugadorComponent } from './components/new-jugador/new-jugador.component';
import { authGuardGuard } from './utils/auth.guard.guard';

export const routes: Routes = [
    {path: 'admin', 
        loadChildren:()=> import('./components/admin/admin.module').then(m => m.AdminModule),
        
    },

    { path:'', component:LoginComponent },
    { path:'points', component: PointsComponent,canActivate:[authGuardGuard]},
    { path: 'lector', component: QrLectorComponent,canActivate:[authGuardGuard]},
    { path: 'rewards', component:RewardsComponent,canActivate:[authGuardGuard] },
    { path: 'registro', component: NewJugadorComponent },
    { path: '**', redirectTo: '/' }
];
