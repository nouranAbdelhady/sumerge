import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Film } from './film/film-module';
import { FilmProvider } from '../extra/film-provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  films: Film[] = [];
  isFetching = false;
  
  constructor(private http: HttpClient , private router: Router, private filmProvider: FilmProvider) {}

  ngOnInit() {
    this.loadFilms();
    console.log("loadFilms Called!");
  }

  moreDetails(film: Film) {
    this.filmProvider.setDetails(film);
    this.router.navigate(['/home/film/film-details']);
  }

  loadFilms() {
    this.isFetching = true;
    this.http.get<any>(API_URL)
    .subscribe(
      response => {
        console.log("Response: " + response);
        this.films = response['results'];
      }, 
    );
  }
}

const API_KEY = 'api_key=e46e4a84e629f1c0e45c8c03a3d1a571' ;
const BASE_URL= 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;