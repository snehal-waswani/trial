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

  constructor(private http: Http) {

  }

  ngOnInit() {
  }
  
 
  lclicked()
  {
    let url =  "http://192.168.43.139:8082/login/validate?username=abc123@gmail.com&password=abc123";
     this.http.get(url).subscribe(res => {
      //console.log(res.text())
      //var data=res.text();
      if("true" == "true")
      {
        	window.location.href = "http://localhost:4200/home/markets";
      }
      else
      {
        window.location.href = "http://localhost:4200/home/login";
        alert ("Username or Password is incorrect.");
      }
    });
  }

  
}