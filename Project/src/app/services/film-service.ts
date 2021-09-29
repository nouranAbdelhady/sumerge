import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Film } from '../module/film-module';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  loadedData: Film[] = [];
  isFetching = false;
  detailedObj!: Film;
  
  constructor(private http: HttpClient) { }

  loadData() {
    
    return this.http.get<any>(API_URL, {
      params: new HttpParams().set('api_key', API_KEY)
    });
    
  }

  getDetails() {
    console.log("get Details: "+ this.detailedObj);
    return this.detailedObj;
  }

  setDetails(film: Film) {
    console.log("set Details: "+ film);
    this.detailedObj = film;
  }

}

const API_KEY = 'api_key=e46e4a84e629f1c0e45c8c03a3d1a571' ;
const BASE_URL= 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;