import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  fit('Створення екземпляру', () => {
    expect(service).toBeTruthy();
  });

  fit('Табулювання значення функції х = 9.42, y = 12332.582', () => {
    let x = 9.42;
    let yExpected = Math.exp(x);
    let xyCoordinates = service.getTab();
    let y = xyCoordinates.get(x);
    expect(y.toFixed(3)).toBe(yExpected.toFixed(3));
  })
});
