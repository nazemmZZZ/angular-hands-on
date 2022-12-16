import { AutocompleteEntityService } from './autocomplete-entity.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteResolver implements Resolve<boolean> {
  constructor(private autocomplrt:AutocompleteEntityService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
   return this.autocomplrt.loaded$.pipe(
     tap((loaded) => {
       if (!loaded) {
         this.autocomplrt.getAll();
       }
     }),
     filter((loaded) => !!loaded),
     first()
   );;
  }
}
