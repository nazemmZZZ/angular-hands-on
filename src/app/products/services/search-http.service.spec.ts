import { products } from './../../../test-data';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { SearchHttpService } from './search-http.service';


describe('SearchHttpService', () => {
  let service: SearchHttpService, httpTestingControler: HttpTestingController;

  beforeEach(() => {
    console.log(HttpTestingController)
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchHttpService, HttpClientTestingModule],
    });
    service = TestBed.inject(SearchHttpService)
    httpTestingControler=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    service.search("").subscribe(res => {
      expect(res.length).toBe(4)
    })
    const req = httpTestingControler.expectOne('https://dummyjson.com/products/search?q=');
    expect(req.request.method).toEqual("GET")
    req.flush(products);
  });
});
