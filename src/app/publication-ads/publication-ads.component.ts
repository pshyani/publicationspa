import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PublicationAdsService } from '../_services/publicationAds.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { PublicationAd } from '../_models/publicationAds';
import { Pagination, PaginatedResult } from '../_models/pagination';

@Component({
  selector: 'app-publication-ads',
  templateUrl: './publication-ads.component.html',
  styleUrls: ['./publication-ads.component.css']
})
export class PublicationAdsComponent implements OnInit {
  publicationAds: PublicationAd[];
  pagination: Pagination;
  sortBy: any = '';
  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowModelType;
  cacheBlockSize;
  maxBlocksInCache;
  rowData: [];
  
  constructor(private pubAdsService: PublicationAdsService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.columnDefs = [
      {headerName: 'Month', field: 'month' },
      {headerName: 'PublicationId', field: 'publicationId',  sortable: true },
      {headerName: 'PublicationName', field: 'publicationName', sortable: true },
      {headerName: 'ParentCompany', field: 'parentCompany', sortable: true },
      {headerName: 'ParentCompanyId', field: 'parentCompanyId', sortable: true },
      {headerName: 'BrandName', field: 'brandName', sortable: true },
      {headerName: 'BrandId', field: 'brandId', sortable: true },
      {headerName: 'ProductCategory', field: 'productCategory', sortable: true },
      {headerName: 'AdPages', field: 'adPages', sortable: true },
      {headerName: 'EstPrintSpend', field: 'estPrintSpend', sortable: true },
    ];

    this.defaultColDef = {
      width: 120,
      resizable: true
    };
    //this.rowModelType = "serverSide";

    this.route.data.subscribe(data => {
      this.publicationAds = data['publicationAds'].result;
      this.pagination = data['publicationAds'].pagination;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    console.log(params.api);

    this.pubAdsService.getPublicationAds(this.pagination.currentPage, this.pagination.itemsPerPage, this.sortBy)
    .subscribe((res: PaginatedResult<PublicationAd[]>) => {
    this.publicationAds = res.result;
    this.pagination = res.pagination;
  }, error => {
    this.alertify.error(error);
  });
  }
  // pageChanged(event: any): void {
  //   this.pagination.currentPage = event.page;
  //   this.pagination.itemsPerPage = event.itemsPerPage;
  //   this.loadAds();
  // }

  // loadAds() {
  //   this.pubAdsService.getPublicationAds(this.pagination.currentPage, this.pagination.itemsPerPage, this.sortBy)
  //     .subscribe((res: PaginatedResult<PublicationAd[]>) => {
  //     this.publicationAds = res.result;
  //     this.pagination = res.pagination;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
