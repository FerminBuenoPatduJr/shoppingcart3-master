import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }
  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true
    }
    this.router.navigate(['login'])
    return false
  }

  isAdmin(){
    if(localStorage.getItem('userType') == 'admin'){
      return true
    }
    return false
  }

  isUser(){
    if(localStorage.getItem('userType') == 'user'){
      return true
    }
    return false
  }
}
