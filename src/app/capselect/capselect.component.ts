import { Component, OnInit } from '@angular/core';
import {Http, Response, RequestOptions, Headers } from '@angular/http'
import { variable } from '@angular/compiler/src/output/output_ast';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-capselect',
  templateUrl: './capselect.component.html',
  styleUrls: ['./capselect.component.css']
})
export class CapselectComponent implements OnInit {
  large: any[];
  mid: any[];
  small: any[];
  columns: string[];

  constructor(private http: Http) {}
  ngOnInit() {
    this.columns = this.getColumns();
    this.lclicked();
  }
  
 
  lclicked() {
    let url =  "http://192.168.0.12:8082/populate-stocks/view-large-cap";
    this.http.get(url).subscribe(r => {
      this.large = r.json();
      console.log(this.large);
    });
  }

  mclicked() {
    let url =  "http://192.168.0.12:8082/populate-stocks/view-mid-cap";
    this.http.get(url).subscribe(r => {
      this.mid = r.json();
      console.log(this.mid);
    });
  }

  sclicked() {
    let url =  "http://192.168.0.12:8082/populate-stocks/view-small-cap";
    this.http.get(url).subscribe(r => {
      this.small = r.json();
      console.log(this.small);
    });
  }

  getColumns(): string[]{
    return ["companyName", "open", "high", "low", "close","volume","percentChange"];
  }
}

