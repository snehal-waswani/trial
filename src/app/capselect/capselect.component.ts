import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capselect',
  templateUrl: './capselect.component.html',
  styleUrls: ['./capselect.component.css']
})
export class CapselectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 
   getcontroller($scope, $http, $location)
   {
    $scope.getfunction = function(){
      // get URL
      var url = $location.absUrl() + "api/customer/all";
      console.log(url);
      // do getting
      $http.get(url).then(function (response) {
        // turn on flag for get successfully
        $scope.getDivAvailable = true;
        
        $scope.response = response.data;
      }, function error(response) {
        $scope.postResultMessage = "Error Status: " +  response.statusText;
      });  
  }
}

}