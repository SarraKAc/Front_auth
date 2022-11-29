import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOffertComponent } from './service-offert.component';

describe('ServiceOffertComponent', () => {
  let component: ServiceOffertComponent;
  let fixture: ComponentFixture<ServiceOffertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOffertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
