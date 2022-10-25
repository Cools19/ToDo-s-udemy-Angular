import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/Services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="Chandu"
  password=''
  errorMessage='Invalid Credential----'
  invalidLogin=false


  //router
  //Dependency injection
  constructor(private router:Router,
    private hardcodedAuthenticationServices:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    // if(this.username=="Chandu" && this.password==='pword'){
      if(this.hardcodedAuthenticationServices.authenticate(this.username,this.password)){
      //redirect to welcome Page
     this.router.navigate(['welcome',this.username])
      this.invalidLogin= false
    }else{
      this.invalidLogin=true
    }
    
  }

}
