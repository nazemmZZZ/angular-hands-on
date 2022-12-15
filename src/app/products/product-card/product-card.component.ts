import { CartEntityService } from './../services/cart-entity.service';
import { Product } from './../models/prodect';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;
  @Input()
  type!: Cardtype;
  buttonText!: string;

  constructor(private cartEntityService: CartEntityService) {}
  ngOnInit(): void {
    this.buttonText = this.type == 'ITEAM' ? 'Add to cart' : 'remove';
  }
  action() {
    if (this.type == 'ITEAM') {
      this.cartEntityService.addOneToCache(this.product);
    } else {
      this.cartEntityService.removeOneFromCache(this.product)
    }
  }
}
export type Cardtype='CART'|'ITEAM'
