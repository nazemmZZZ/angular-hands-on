import { Cardtype } from './../product-card/product-card.component';
import { SearchHttpService } from './../services/search-http.service';

import { Autoc } from './../models/auto';
import { AutocompleteEntityService } from './../services/autocomplete-entity.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  fromEvent,
  switchMap,
  of,
} from 'rxjs';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { Product } from '../models/prodect';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css','../product-list/product-list.component.css'],
})
export class SearchPageComponent implements OnInit {
  suggestions: string[] = [];
  searchField: FormControl;
  coolForm: FormGroup;
  suggestions$!: Observable<Autoc[]>;
  products$:Observable<Product[]>=of([])
  type:Cardtype='ITEAM'
  constructor(
    private autocompleteEntiy: AutocompleteEntityService,
    private fb: FormBuilder, private searchService:SearchHttpService
  ) {
    this.searchField = new FormControl();
    this.coolForm = fb.group({ search: this.searchField });
  }

  ngOnInit(): void {
    this.suggestions$ = this.autocompleteEntiy.entities$;
    this.suggestions$.subscribe((val) => {
      console.log('====================================');
      this.suggestions = val[0].auto;
      console.log(val);
      console.log('====================================');
    }); this.searchField.valueChanges
      .pipe(
      debounceTime(400)
    )
      .subscribe(val => {
       console.log('====================================');
       console.log(val);
      console.log('====================================');
      this.products$=this.searchService.search(val)

    })
  }
  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 1
          ? []
          : this.suggestions.filter((v) =>
              v.toLowerCase().startsWith(term.toLowerCase())
            )
      )
    );
}
