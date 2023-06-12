import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../../models/types/user";
import {GraphqlService} from "../../../../../helpers/services/graphql.service";
import {Router} from "@angular/router";
import {StoreService} from "../../../../../helpers/services/store.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MutationResult} from "apollo-angular";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private router: Router,
    private graphqlService: GraphqlService,
    private storeService: StoreService,
    private dialogRef: MatDialogRef<LoginModalComponent>,
  ) {
  }

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
    this.graphqlService.loginUser(this.loginForm.value)
      .subscribe((v: MutationResult ) => {
        console.log(v)
        this.saveUserData(v.data.loginUser)
        this.dialogRef.close()
        this.router.navigate(['/personal'])
      })
  }

  private saveUserData(data: User): void {
    this.storeService.saveUser(data);
  }

}
