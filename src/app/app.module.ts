import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PublicationAdsComponent } from './publication-ads/publication-ads.component';

import { PublicationAdsListResolver } from './_resolver/publicationAds-list.resolver';
import { BsDropdownModule, TabsModule, PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { PublicationAdsService } from './_services/publicationAds.service';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PublicationAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    PaginationModule.forRoot(),
  ],
  providers: [
    PublicationAdsService,
    PublicationAdsListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
