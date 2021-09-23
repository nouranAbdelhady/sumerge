import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmProvider } from 'src/app/extra/film-provider';
import { Film } from './film-module';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  certainFilm!: Film;
  
  constructor(public filmProvider: FilmProvider , public router: Router) { }

  ngOnInit(): void {
    this.certainFilm = this.filmProvider.getDetails();
    console.log("GetDetails called");
  }
  
  goBack() {
    this.router.navigate(['/home']);
  } 

}