import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'dashboard',loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule),canActivate:[AuthGuard]},
  {path:'auth',loadChildren:()=>import('./pages/auth/authentication.module').then(m=>m.AuthModule)},
  {path:'',redirectTo:'/dashboard' ,pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
