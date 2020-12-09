import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesprodsComponent } from './cesprods.component';

describe('CesprodsComponent', () => {
  let component: CesprodsComponent;
  let fixture: ComponentFixture<CesprodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesprodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CesprodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
