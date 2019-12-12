import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAdsComponent } from './publication-ads.component';

describe('PublicationAdsComponent', () => {
  let component: PublicationAdsComponent;
  let fixture: ComponentFixture<PublicationAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  
  });
});
