import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class ProductService {
   httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
   };
   constructor(private http: HttpClient) {}

   private backendURL = 'http://localhost:8081/product';

   getAllByCategory(category: String): Observable<any> {
      return this.http.get(`${this.backendURL}/category/${category}`);
   }

   getAll(): Observable<any> {
      return this.http.get(`${this.backendURL}/all`);
   }

   getById(id: String): Observable<any> {
    return this.http.get(`${this.backendURL}?id=${id}`);
 }
}
