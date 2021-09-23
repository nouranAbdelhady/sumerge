import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Film } from '../home/film/film-module';

@Injectable({
  providedIn: 'root'
})
export class FilmProvider {
  loadedData: Film[] = [];
  isFetching = false;
  detailedObj!: Film;
  
  constructor(private http: HttpClient) { }

  loadData(url: string, apiKey: string) {
    this.isFetching = true;
    this.http.get<any>(url, {
      params: new HttpParams().set('api_key', API_KEY)
    }).subscribe(
      response => {
        console.log("Response:" + response);
        this.loadedData = response['response'];
      }
    );
    return this.loadedData;
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