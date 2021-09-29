import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import { AngularMaterialModule } from './angular-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmComponent } from './home/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth-service';
import { AuthGuard } from './services/auth-guard-service';
import { FilmDetailsComponent } from './home/film/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    FilmComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    
  ],
  providers: [ AuthService , AuthGuard ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }