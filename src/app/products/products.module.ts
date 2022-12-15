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

const entityMetadataMap: EntityMetadataMap = {
  Product: {},
  Cart:{}
};
@NgModule({
  declarations: [ProductsComponent, ProductCardComponent, ProductListComponent, CartListComponent],
  imports: [CommonModule, ProductsRoutingModule, EntityDataModule.forRoot({})],
  exports: [ProductsComponent, ProductCardComponent, ProductListComponent],
  providers: [
    ProductEntitiyServiceService,
    ProductDataServiveService,
    ProductsResolver,
    CartEntityService,
  ],
})
export class ProductsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private productDateSirvice: ProductDataServiveService
  ) {
    eds.registerMetadataMap(entityMetadataMap);
    entityDataService.registerService('Product', productDateSirvice);
  }
}
