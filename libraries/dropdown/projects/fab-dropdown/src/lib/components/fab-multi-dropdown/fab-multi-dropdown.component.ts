import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fab-multi-dropdown',
  templateUrl: './fab-multi-dropdown.component.html',
  styleUrls: ['./fab-multi-dropdown.component.sass']
})
export class FabMultiDropdownComponent implements OnInit {

  @Input() getItem;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();
  @Input() data;
  @Input() enableSearch;
  @Input() placeHolderText;
  @Input() selectedValues;
  filteredData;
  showDropdown = false;
  selectedItems = new Set();
  constructor() { }

  ngOnInit() {
    this.filteredData = JSON.parse(JSON.stringify(this.data));
    if (this.selectedValues) {
      const selectedValuesTemp = [];
      this.selectedValues.forEach(element => {
        if (typeof(element) === 'string') {
          this.data.forEach(item => {
            if (element === item.id) {
              selectedValuesTemp.push(item);
              this.selectedItems.add(element);
            }
          });
        } else {
          selectedValuesTemp.push(element);
          this.selectedItems.add(element);
        }
      });
      this.selectedValues = selectedValuesTemp;
    }
  }

  itemSelected(item) {
    if (!this.selectedValues) {
      this.selectedValues = [];
    }
    if (!this.selectedItems.has(item.id)) {
      this.selectedValues.push(item);
      this.selectedItems.add(item.id);
    } else {
      this.selectedValues = this.selectedValues.filter(items => {
        if (this.selectedItems.has(item.id)) {
          return true;
        } else {
          return false;
        }
      });
      this.selectedItems.delete(item.id);
    }
    if (this.getItem) {
      this.change.emit(this.selectedValues);
    } else {
      this.change.emit(Array.from(this.selectedItems));
    }
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

  onSelectAll(event) {
    if (!this.selectedValues) {
      this.selectedValues = [];
    }
    if (event === 'selectAll') {
      const selected = this.data.map(item => item.id);
      this.selectedItems = new Set(selected);
      this.selectedValues = JSON.parse(JSON.stringify(this.data));
    } else {
      this.selectedItems = new Set();
      this.selectedValues = [];
    }
    if (this.getItem) {
      this.change.emit(this.selectedValues);
    } else {
      this.change.emit(Array.from(this.selectedItems));
    }
  }

}
