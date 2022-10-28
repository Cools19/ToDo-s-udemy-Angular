import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){ }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor
  ( private http:HttpClient ) { }



  executeHelloWorldBeanService(){
     return this.http.get<HelloWorldBean>('http://localhost:8080/helloworld-bean');

    // console.log("Execute hello world Bean Services")
  }
  
  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(` http://localhost:8080/helloworld/path-variable/${name}`);
 
}
}
