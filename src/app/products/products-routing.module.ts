import { AutocompleteResolver } from './services/autocomplete.resolver';
import { SearchPageComponent } from './search-page/search-page.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductsResolver } from './services/products.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: {
      products: ProductsResolver,
    }
  },
     { path: 'cart', component: CartListComponent
  }, { path: 'search', component: SearchPageComponent, resolve:{
    search:AutocompleteResolver
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
