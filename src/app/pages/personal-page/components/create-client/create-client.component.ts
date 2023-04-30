import {Component, Input, OnInit} from '@angular/core'
import {BehaviorSubject, take} from "rxjs"
import {User} from "../../../../models/types/user"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {GraphqlService} from "../../../../helpers/services/graphql.service"
import {RoleEnum} from "../../../../models/enums/role-enum"
import {GenderEnum} from "../../../../models/enums/gender-enum"
import {NotificationsService} from "../../../../helpers/services/notifications/notifications.service"

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>
  createForm!: FormGroup;
  RoleEnum = RoleEnum;
  GenderEnum = GenderEnum;

  //TODO: сделать обработку валидации при заполнении полей
  constructor(
    private qraphqlService: GraphqlService,
    private notificationService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.formBuildCreate()
  }

  public formBuildCreate(): void {
    this.createForm = new FormGroup({
      first_name: new FormControl('111',[
        Validators.required,
        Validators.minLength(2),
      ]),
      last_name: new FormControl('111', [
        Validators.required,
        Validators.minLength(2),
      ]),
      username: new FormControl('111', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('111', [
        Validators.required,
      ]),
      roleId: new FormControl('', [
        Validators.required,
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      height: new FormControl(111, [
        Validators.required,
      ]),
      birth_day: new FormControl('', [
        Validators.required,
      ]),
      start_train: new FormControl('', [
        Validators.required,
      ]),
      test: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  onSubmitLogin(){
    const data = {
      first_name: this.createForm.value.first_name,
      last_name: this.createForm.value.last_name,
      username: this.createForm.value.username,
      password: this.createForm.value.password,
      roleId: Number(this.createForm.value.roleId),
      personal: {
        gender: Number(this.createForm.value.gender),
        height: this.createForm.value.height,
        birth_day: Number(this.createForm.value.birth_day),
        start_train: Number(this.createForm.value.start_train)
      }
    }
    this.qraphqlService.createClient(data)
      .pipe(take(1))
      .subscribe(() => {
        this.notificationService
          .eventNotification('Пользователь успешно создан')
      })
  }

}
