import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/core/service/auth-service/auth-service.service';
import { EditFormComponent } from '../../offers/edit-form/edit-form.component';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService, 
    private edit: EditFormComponent,
    private router: Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checked1();
  }
  checked1(): boolean{
    // console.log('im here')
    // if(this.authService.isUserId() == this.edit.uid){
      return true;
    // }
    // this.router.navigate(['/auth/catalog']);
    // return false;
  }
  
}
