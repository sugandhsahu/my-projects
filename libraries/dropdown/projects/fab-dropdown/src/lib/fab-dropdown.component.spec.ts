import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabDropdownComponent } from './fab-dropdown.component';

describe('FabDropdownComponent', () => {
  let component: FabDropdownComponent;
  let fixture: ComponentFixture<FabDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
