import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { SideBarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './page/login/login.component';
import { ItemComponent } from './page/item/item.component';

const routes: Routes = [
  { path: 'home', component: ItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
