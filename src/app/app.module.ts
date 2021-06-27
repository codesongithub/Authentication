import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductviewComponent } from './productview/productview.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserviewComponent } from './userview/userview.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardcontainerComponent } from './dashboardcontainer/dashboardcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    ProductlistComponent,
    ProducteditComponent,
    ProductcreateComponent,
    ProductviewComponent,
    UserlistComponent,
    UsereditComponent,
    UserviewComponent,
    UsercreateComponent,
    LoginComponent,
    RegisterComponent,
    DashboardcontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
