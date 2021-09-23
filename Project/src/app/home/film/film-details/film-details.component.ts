import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmProvider } from 'src/app/extra/film-provider';
import { Film } from 'src/app/home/film/film-module';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {
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