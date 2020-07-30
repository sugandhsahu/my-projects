import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  urlsData;

  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(): void {
   this.getData();
  }

  getData() {
    this.http.post('http://localhost:5000/getUrls', {}).subscribe(
      res => {
        this.urlsData = res;
      }
      );
  }

  submit(url) {
    this.http.post('http://localhost:5000/shortUrls', {fullUrl: url}).subscribe(
    res => {
      this.getData();
    }
    );
  }

}
