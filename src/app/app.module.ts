import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule,HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      // import HttpClientModule after BrowserModule.
      HttpClientModule,
      ChartModule , // add ChartModule to your imports

    AppRoutingModule
  ],
  providers: [ { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})
export class AppModule { }
