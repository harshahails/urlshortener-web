import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {
  private backEndUrl = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    })
  };

  constructor(private http : HttpClient) { }

  postUrl(post) {
    
   return this.http.post(this.backEndUrl,post,this.httpOptions)
  }
}
