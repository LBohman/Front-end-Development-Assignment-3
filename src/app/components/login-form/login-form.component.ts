import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  public  loginSubmit(loginForm: NgForm): void{

    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (user: User)=>{
          this.router.navigateByUrl("/pokemon")
        },
        error: ()=>{

        }
      })
  }

}
