import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{

    loggedIn=false
    private logInSource= new Subject<boolean>();
    loggedIn$ = this.logInSource.asObservable();

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=> {
                    resolve(this.loggedIn)
                }, 800);
            }
         );
         return promise;
    }

    getAuthStatus()
    {
        return this.loggedIn;
    }

    login(){
        this.loggedIn=true
        this.logInSource.next(this.loggedIn);
        console.log("Auth service: changed login to true!");
    }
    logout(){
        this.loggedIn=false
    }

}