import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PaginatedResult } from "../_models/pagination";
import { PublicationAd } from '../_models/publicationAds';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class PublicationAdsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPublicationAds(page?, itemsPerPage?, sortBy?): Observable<PaginatedResult<PublicationAd[]>> {
   
    const paginatedResult: PaginatedResult<PublicationAd[]> = new PaginatedResult<PublicationAd[]>();
    
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if(sortBy != null){
      params = params.append('sortBy', sortBy);
    }

    return this.http
      .get<PublicationAd[]>(this.baseUrl + 'Home/GetAllAds', {
        observe: 'response',
        params
      })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedResult;
        })
      );
  }
}
