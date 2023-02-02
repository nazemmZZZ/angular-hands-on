import { ProductsModule } from './../products.module';
import { products } from './../../../test-data';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEntitiyServiceService } from '../services/product-entitiy-service.service';

import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let el: DebugElement
  let producEntity: ProductEntitiyServiceService;
  let products$;
  beforeEach(async () => {
    const productsSpy: ProductEntitiyServiceService = jasmine.createSpyObj(
      'ProductEntitiyServiceService',
      [],['entities$']
    );
    await TestBed.configureTestingModule({
      imports:[ProductsModule,StoreModule.forRoot({}),HttpClientTestingModule],
      providers: [
        // ProductEntitiyServiceService,
        {
          provide: ProductEntitiyServiceService,
          useValue: {
            entities$: of(products.products),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement
    producEntity = TestBed.inject(ProductEntitiyServiceService)
    //spyOn(productsSpy, 'entities$').and.returnValue({ subscribe: () => (products.products as Product[]) });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display all products', () => {
    fixture.detectChanges()
    const cards = el.queryAll(By.css('.card'));
    expect(cards.length).toBe(4)
  })
   it('should be of type iteam', () => {
     fixture.detectChanges();
     const type = component.type;
     expect(type).toBe('ITEAM');
   });
});
