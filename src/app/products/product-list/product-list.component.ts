import { Cardtype } from './../product-card/product-card.component';
import { Product } from './../models/prodect';
import { Observable } from 'rxjs';
import { ProductEntitiyServiceService } from './../services/product-entitiy-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public products!: Product[];
  public  type:Cardtype='ITEAM'

  constructor(private producEntity: ProductEntitiyServiceService) {}
  ngOnInit(): void {
    this.products$ = this.producEntity.entities$;
    this.products$.subscribe(val => this.products = val)

  }
}
