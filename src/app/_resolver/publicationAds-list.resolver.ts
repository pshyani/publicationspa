import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { PublicationAd } from '../_models/publicationAds';
import { PublicationAdsService } from '../_services/publicationAds.service';

@Injectable({ providedIn: 'root' })
export class PublicationAdsListResolver implements Resolve<PublicationAd[]> {

    pageNumber = 1;
    pageSize = 50;
    constructor(private publicationadsservice: PublicationAdsService,
                private router: Router,
                private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<PublicationAd[]> | Promise<PublicationAd[]> | PublicationAd[] {
        return this.publicationadsservice.getPublicationAds(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}