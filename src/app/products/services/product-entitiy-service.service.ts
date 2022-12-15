import { Product } from './../models/prodect';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProductEntitiyServiceService extends EntityCollectionServiceBase<Product> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Product', serviceElementsFactory);
  }
}

