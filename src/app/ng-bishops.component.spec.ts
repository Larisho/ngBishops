import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgBishopsAppComponent } from '../app/ng-bishops.component';

beforeEachProviders(() => [NgBishopsAppComponent]);

describe('App: NgBishops', () => {
  it('should create the app',
      inject([NgBishopsAppComponent], (app: NgBishopsAppComponent) => {
    expect(app).toBeTruthy();
  }));

});
