import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { ButtonComponent } from './shared/button/button.component';
import { ContentComponent } from './layout/content/content.component';
import { ItemComponent } from './page/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LoginComponent,
    HeaderComponent,
    DataTableComponent,
    ButtonComponent,
    ContentComponent,
    ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
