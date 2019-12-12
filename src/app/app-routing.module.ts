import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationAdsComponent } from './publication-ads/publication-ads.component';
import { PublicationAdsListResolver } from './_resolver/publicationAds-list.resolver';


const routes: Routes = [
  { path: '', component: PublicationAdsComponent , resolve: {publicationAds: PublicationAdsListResolver} },
   { path: 'AllAds', component: PublicationAdsComponent, resolve: {publicationAds: PublicationAdsListResolver} },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
