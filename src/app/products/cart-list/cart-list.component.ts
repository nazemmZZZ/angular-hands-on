import { CartEntityService } from './../services/cart-entity.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../models/prodect';
import { Observable } from 'rxjs';
import { Cardtype } from '../product-card/product-card.component';
@Component({
  selector: 'app-cart-list',
  templateUrl: '../product-list/product-list.component.html',
  styleUrls: ['../product-list/product-list.component.css'],
})
export class CartListComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public products!: Product[];
  public type: Cardtype = 'CART';
  constructor(private cartEntity: CartEntityService) {}
  ngOnInit(): void {
   
    this.products$ = this.cartEntity.entities$;
    this.products$.subscribe((val) => (this.products = val));
  }
}
