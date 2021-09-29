import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './home/film/film.component';
import { AuthGuard } from './services/auth-guard-service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmDetailsComponent } from './home/film/film-details/film-details.component';


const routes: Routes = [
  { path: '' , component: LoginComponent , data:{source:'login-page'} } ,
  { path: 'home', component: HomeComponent }, //canActivate:[AuthGuard], data:{source:'home-page'} },
  { path: 'home/film/film-details' , component: FilmDetailsComponent },//canActivate:[AuthGuard],data:{source:'protected-page'}},
  { path: "not-found", component:PageNotFoundComponent ,  data:{source:'not-found'}},
  { path: "**", redirectTo:"not-found"},  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
