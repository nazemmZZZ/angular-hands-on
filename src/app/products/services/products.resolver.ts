import { ProductEntitiyServiceService } from './product-entitiy-service.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, first, map, tap} from 'rxjs/operators';


@Injectable()
export class ProductsResolver implements Resolve<boolean> {
  constructor(
    private productEntity: ProductEntitiyServiceService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.productEntity.loaded$.pipe(
      tap((loaded) => {

        if (!loaded) {
          this.productEntity.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
