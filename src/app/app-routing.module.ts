import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
