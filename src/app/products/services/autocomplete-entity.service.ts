import { Autoc } from './../models/auto';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
@Injectable()
export class AutocompleteEntityService extends EntityCollectionServiceBase<Autoc> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Suggrstion', serviceElementsFactory);
  }
}

