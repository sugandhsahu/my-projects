import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fab-dropdown',
  template: `
    <ng-container *ngIf="type && type.toLowerCase() === 'single'">
      <fab-single-dropdown [data] = "data" [enableSearch]="enableSearch" [getItem]="getItem"
      [placeHolderText]="placeHolderText" (change) ="dropDownChange($event)" [selectedValue]="selectedValue"
      ></fab-single-dropdown>
    </ng-container>
    <ng-container *ngIf="type && type.toLowerCase() === 'multiple'">
      <fab-multi-dropdown
      [data] = "data" [enableSearch]="enableSearch" [getItem]="getItem"
      [placeHolderText]="placeHolderText" (change) ="dropDownChange($event)"
      [selectedValues]="selectedValues"
      ></fab-multi-dropdown>
    </ng-container>
  `,
  styles: [
  ]
})
export class FabDropdownComponent implements OnInit {

  @Input() getItem;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();
  @Input() data;
  @Input() enableSearch;
  @Input() placeHolderText;
  @Input() type;
  @Input() selectedValue;
  @Input() selectedValues;
  constructor() { }

  ngOnInit() {
  }

  dropDownChange($event) {
    this.change.emit($event);
  }

}
