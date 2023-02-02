import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './../models/prodect';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchHttpService {
  constructor(private http: HttpClient) { }
  search(term: string): Observable<Product[]> {
    const params = new HttpParams().set('q', term)
    return this.http
      .get('https://dummyjson.com/products/search', { params: params })
      .pipe(map((res: any) => res['products']));


  }
}
