import { Injectable } from '@angular/core';
import { Product } from './../models/prodect';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
@Injectable()
export class CartEntityService extends EntityCollectionServiceBase<Product> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Cart', serviceElementsFactory);
  }
}
