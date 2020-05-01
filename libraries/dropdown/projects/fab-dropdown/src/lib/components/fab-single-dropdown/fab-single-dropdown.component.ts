import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fab-single-dropdown',
  templateUrl: './fab-single-dropdown.component.html',
  styleUrls: ['./fab-single-dropdown.component.sass']
})
export class FabSingleDropdownComponent implements OnInit {

  @Input() getItem;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();
  @Input() data;
  @Input() enableSearch;
  @Input() placeHolderText;
  @Input() selectedValue;

  filteredData;
  showDropdown = false;
  constructor() { }

  ngOnInit() {
    this.filteredData = JSON.parse(JSON.stringify(this.data));
    if (this.selectedValue) {
      if (typeof(this.selectedValue) === 'string') {
        this.data.forEach(element => {
          console.log(element)
          if (element.id === this.selectedValue) {
            this.selectedValue = element;
          }
        });
      }
    }
  }

  itemSelected(item) {
    if (this.getItem) {
      this.change.emit(item);
    } else {
      this.change.emit(item.id);
    }
    this.selectedValue = item;
  }
  inputClicked() {
    if (this.showDropdown) {
      this.showDropdown = false;
    } else {
      this.showDropdown = true;
    }
  }
  search($event) {
    this.filteredData = this.data.filter(item => {
      if (item.label.includes($event.target.value)) {
        return true;
      } else {
        return false;
      }
    });
  }

}
