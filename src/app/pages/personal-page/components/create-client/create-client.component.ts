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

  RoleEnum = RoleEnum;
  GenderEnum = GenderEnum;

  createForm!: FormGroup;

  @Input() public user!: BehaviorSubject<User>

  constructor(
    private graphqlService: GraphqlService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.formBuildCreate()
  }

  public formBuildCreate(): void {
    this.createForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required, Validators.minLength(2),
      ]),
      last_name: new FormControl('', [
        Validators.required, Validators.minLength(2),
      ]),
      username: new FormControl('', [
        Validators.required, Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6),
      ]),
      roleId: new FormControl(1, [
        Validators.required,
      ]),
      gender: new FormControl(2, [
        Validators.required,
      ]),
      height: new FormControl(null, [
        Validators.required,
      ]),
      birth_day: new FormControl('', [
        Validators.required,
      ]),
      start_train: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  onSubmitLogin() {
    if (this.createForm.status === 'VALID') {
      const data = {
        first_name: this.createForm.value.first_name,
        last_name: this.createForm.value.last_name,
        username: this.createForm.value.username,
        password: this.createForm.value.password,
        roleId: Number(this.createForm.value.roleId),
        personal: {
          gender: Number(this.createForm.value.gender),
          height: Number(this.createForm.value.height),
          birth_day: Number(this.createForm.value.birth_day),
          start_train: Number(this.createForm.value.start_train)
        }
      }
      console.log(data)
      this.graphqlService.createClient(data)
        .pipe(take(1))
        .subscribe(() => {
          this.notificationService
            .onEventNotification('Пользователь успешно создан')
          this.createForm.reset()
        })
    } else {
      this.notificationService.onEventNotification('Заполнены не все поля')
    }
  }

}
