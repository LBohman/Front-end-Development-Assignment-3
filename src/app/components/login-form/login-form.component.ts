import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // Create EventEmitter which emitt event to the parent component that is hosting to login form
  @Output() login: EventEmitter<void> = new EventEmitter();

  // DI
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService,
  ) {}

  public  loginSubmit(loginForm: NgForm): void{

    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (user: User)=>{
          this.userService.user = user;
          this.login.emit();
        },
        error: ()=>{
          // Handle error locally
        }
      })
  }

}
