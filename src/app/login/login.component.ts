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
    var user = document.getElementsByName("username")[0].value;
    var pass = document.getElementsByName("password")[0].value;
    console.log("i'm here");
    console.log(user);
    console.log(pass);
    let url =  "http://192.168.43.44:8090/login/validate?username=dumb&password=password";
    /*this.http.get(url).subscribe(res => {
      console.log(res.text())
      var data=res.text();
      if(data == "true")
      {

      }
    });*/
    
    console.log('Now Im not')
    //console.log(this.http.get(url));
     //.map((res: Response) => res.json); 
  }
}

