import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSingleDropdownComponent } from './fab-single-dropdown.component';

describe('FabSingleDropdownComponent', () => {
  let component: FabSingleDropdownComponent;
  let fixture: ComponentFixture<FabSingleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSingleDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSingleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
