import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { SideBarComponent } from './pages/layout/side-bar/side-bar.component';
// import { SignupComponent } from 
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './pages/pokemon/test/test.component';
import { ForbiddenComponent } from './pages/error/forbidden/forbidden.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ProfileComponent,
    LoginComponent,
    TestComponent,
    ForbiddenComponent,
    SignUpComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    BrowserModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
