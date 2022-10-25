import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  logout() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  authenticate(username, password){
    // console.log('before ' + this.isUserLoggedIn());
    if(username=="Chandu" && password==='pword'){
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('after ' + this.isUserLoggedIn())
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
}
