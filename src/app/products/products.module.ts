import { SearchHttpService } from './services/search-http.service';
import { AutocompleteEntityService } from './services/autocomplete-entity.service';
import { AutocompleteResolver } from './services/autocomplete.resolver';
import { AutocompleteDataService } from './services/autocomplete-data.service';
import { CartEntityService } from './services/cart-entity.service';
import { ProductsResolver } from './services/products.resolver';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
  EntityDataModule,
} from '@ngrx/data';
import { ProductDataServiveService } from './services/product-data-servive.service';
import { ProductEntitiyServiceService } from './services/product-entitiy-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const entityMetadataMap: EntityMetadataMap = {
  Product: {},
  Cart: {},
  Suggrstion:{},
};
@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductListComponent,
    CartListComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    EntityDataModule.forRoot({}),
    NgbTypeahead,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ProductsComponent, ProductCardComponent, ProductListComponent],
  providers: [
    ProductEntitiyServiceService,
    ProductDataServiveService,
    ProductsResolver,
    CartEntityService,
    AutocompleteDataService,
    AutocompleteEntityService,
    SearchHttpService,
    AutocompleteResolver,
  ],
})
export class ProductsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private productDateSirvice: ProductDataServiveService,
    private autocompleteDataService: AutocompleteDataService
  ) {
    eds.registerMetadataMap(entityMetadataMap);
    entityDataService.registerService('Product', productDateSirvice);
    entityDataService.registerService('Suggrstion', autocompleteDataService);
  }
}
