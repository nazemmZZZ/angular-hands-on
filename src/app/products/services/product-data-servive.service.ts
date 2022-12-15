import { HttpClient } from '@angular/common/http';
import { Product } from './../models/prodect';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProductDataServiveService extends DefaultDataService<Product> {
  constructor(
    private httpClient: HttpClient,
    private urlGenerator: HttpUrlGenerator
  ) {
    super('Product', httpClient, urlGenerator);
  }
  override getAll(): Observable<Product[]> {
    return this.httpClient
      .get('https://dummyjson.com/products')
      .pipe(
        map((res:any) => res.products));
  }
}
