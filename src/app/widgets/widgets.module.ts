import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ButtonCustomComponent} from './button-custom/button-custom.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AvatarClientComponent} from "./avatar-client/avatar-client.component";
import {SelectActivityClientComponent} from "./select-activity-client/select-activity-client.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ScheduleComponent} from "./schedule/schedule.component";
import {PhotosGroupComponent} from "./photos-group/photos-group.component";
import {ContactComponent} from './contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonCustomComponent,
    AvatarClientComponent,
    SelectActivityClientComponent,
    SidenavComponent,
    ScheduleComponent,
    PhotosGroupComponent,
    ContactComponent
  ],
  exports: [
    HeaderComponent,
    ButtonCustomComponent,
    AvatarClientComponent,
    SelectActivityClientComponent,
    SidenavComponent,
    ScheduleComponent,
    PhotosGroupComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ]
})
export class WidgetsModule {
}
