import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers } from '@angular/http'
import { variable } from '@angular/compiler/src/output/output_ast';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  ngOnInit() {

  }

  constructor(private http: Http) {

  }

  submitform() {
    var user = (document.getElementById("username") as HTMLInputElement).value;
    var pass = (document.getElementById("password") as HTMLInputElement).value;
  
    let url =  "http://192.168.0.12:8082/login/validate?username="+user+"&password="+pass;
     this.http.get(url).subscribe(res => {
      //console.log(res.text())
      var data=res.text();
      if(res.text() == "true")
      {
        	window.location.href = "http://localhost:4200/home/markets";
      }
      else
      {
        window.location.href = "http://localhost:4200/home/login";
        alert ("Username or Password is incorrect.");
      }
    });
    
    //console.log('Now Im not')
    //console.log(this.http.get(url));
     //.map((res: Response) => res.json); 
  }
}
