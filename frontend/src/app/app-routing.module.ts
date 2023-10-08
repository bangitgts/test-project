import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: 'home', component: SideBarComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
