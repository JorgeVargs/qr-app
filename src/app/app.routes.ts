import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PointsComponent } from './components/points/points.component';
import { QrLectorComponent } from './components/qr-lector/qr-lector.component';
import { RewardsComponent } from './components/rewards/rewards.component';

export const routes: Routes = [
    { path:'', component:LoginComponent },
    { path:'registro', component:RegistroComponent },
    { path:'points', component: PointsComponent},
    { path: 'lector', component: QrLectorComponent},
    { path: 'rewards', component:RewardsComponent },
    { path: '**', redirectTo: '/' }
];
