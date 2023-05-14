import { Component, OnInit } from '@angular/core';
import {GraphqlService} from "../../../helpers/services/graphql.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/types/user";
import {StoreService} from "../../../helpers/services/store.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  hidePassword: boolean = true;

  //TODO: приватнуть сервис
  constructor(
    public qraphqlService: GraphqlService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.formBuildLogin();
  }

  public formBuildLogin(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onSubmitLogin(){
    this.qraphqlService.loginUser(this.loginForm.value)
      .subscribe((v: any) => this.saveUserData(v.data.loginUser))
  }

  saveUserData(data: User){
    this.storeService.saveUser(data);
  }



  // click(){
  //     this.qraphqlService.getAllUsers().subscribe({
  //       next: (v) => console.log(v),
  //       error: (e) => {
  //         console.log(e.networkError)
  //       },
  //       complete: () => console.info('complete')
  //     })
  // }
  // create(){
  //   this.qraphqlService.createUser().subscribe({
  //     next: (v) => console.log(v),
  //     error: (e) => {
  //       console.dir(e.networkError || e)
  //     },
  //   })
  // }
}
