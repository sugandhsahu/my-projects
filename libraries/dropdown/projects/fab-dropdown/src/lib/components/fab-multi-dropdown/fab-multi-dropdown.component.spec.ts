import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabMultiDropdownComponent } from './fab-multi-dropdown.component';

describe('FabMultiDropdownComponent', () => {
  let component: FabMultiDropdownComponent;
  let fixture: ComponentFixture<FabMultiDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabMultiDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabMultiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
