import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, 
         CanActivate, 
         RouterStateSnapshot,
         Router,
         CanActivateChild,
} from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "./auth-service";

@Injectable()
export class AuthGuard implements CanActivate 
{
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) :Observable<boolean>|Promise<any>|boolean{
     return this.authService.isAuthenticated().then(
            (authencated: any) => {
                if(authencated){    
                    console.log("TRUE");
                    return true;
                }
                console.log("FALSE");
                alert("You need to login first!")
                this.router.navigate(['/']);
                return false;
            }
        )
    }
}
