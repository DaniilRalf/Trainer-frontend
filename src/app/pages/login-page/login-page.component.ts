import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MutationResult} from "apollo-angular";
import {User} from "../../models/types/user";
import {Router} from "@angular/router";
import {GraphqlService} from "../../helpers/services/graphql.service";
import {StoreService} from "../../helpers/services/store.service";
import {NotificationsService} from "../../helpers/services/notifications/notifications.service"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private graphqlService: GraphqlService,
    private storeService: StoreService,
    private notificationService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.formBuildLogin();
  }

  private formBuildLogin(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  public onSubmitLogin(): void {
    if (this.loginForm.status === 'VALID') {
      this.graphqlService.loginUser(this.loginForm.value)
        .subscribe((v: MutationResult ) => {
          this.saveUserData(v.data.loginUser)
          this.router.navigate(['/personal'])
        })
    } else {
      this.notificationService.onEventNotification('Заполнены не все поля')
    }
  }

  private saveUserData(data: User): void {
    this.storeService.saveUser(data);
  }

}
