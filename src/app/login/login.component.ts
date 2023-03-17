import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   email: String = '';
   password: String = '';
   failed: any = '';
   constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

   doLogin(): void {
      this.userService.login(this.email, this.password).subscribe(
         (res) => {
            localStorage.setItem('jwt', res.token);
            localStorage.setItem('email', res.email);
            localStorage.setItem('name', res.name);
            localStorage.setItem('lastnames', res.lastnames);
            this.router.navigate(['/']).then(() => {
               window.location.reload();
            });
         },
         (error: HttpErrorResponse) => {
            this.submitError();
         }
      );
   }
   submitError(): void {
      this.failed = 'true';
   }
}
