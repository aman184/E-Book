import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(
    private http:HttpClient
  ) { }

  getData(){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyD0nIOtc8VnyciwfsUU4k18DFjvBOA5NJM')
  }
}
