import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesempsstgComponent } from './cesempsstg.component';

describe('CesempsstgComponent', () => {
  let component: CesempsstgComponent;
  let fixture: ComponentFixture<CesempsstgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesempsstgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CesempsstgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
