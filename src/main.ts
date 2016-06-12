import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { NgBishopsAppComponent, environment, RestService } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgBishopsAppComponent, [RestService, HTTP_PROVIDERS]);

