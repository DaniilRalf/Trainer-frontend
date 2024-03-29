import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PersonalRoutingModule} from "./personal-routing.module"
import {WidgetsModule} from "../../widgets/widgets.module"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatSelectModule} from "@angular/material/select"
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {PersonalComponent} from './personal.component'
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatButtonToggleModule} from "@angular/material/button-toggle"
import {AdminComponent} from './admin/admin.component'
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import {PersonalDataComponent} from './components/personal-data/personal-data.component'
import {MyParametersComponent} from './components/my-parameters/my-parameters.component'
import {BeforeAfterComponent} from './components/before-after/before-after.component'
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {CreateClientComponent} from './components/create-client/create-client.component'
import {
  UpdateParametersClientComponent
} from './components/update-parameters-client/update-parameters-client.component'
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from "@angular/material/core"
import {
  ModalClientDataComponent
} from './components/update-parameters-client/modal-update-parameters-client/modal-client-data.component'
import {MatDialogModule} from '@angular/material/dialog'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card'
import {MatMenuModule} from "@angular/material/menu"
import {BeforeAfterCreateComponent} from './components/before-after-create/before-after-create.component'
import {
  ModalBeforeAfterCreateComponent
} from './components/before-after-create/modal-before-after-create/modal-before-after-create.component'
import {MatChipsModule} from "@angular/material/chips"
import {DirectivesModule} from "../../helpers/directives/directives.module"
import {MatTabsModule} from "@angular/material/tabs"
import {MatTooltipModule} from "@angular/material/tooltip"
import {
  ModalAdminScheduleComponent
} from '../../widgets/schedule/modal-admin-schedule/modal-admin-schedule.component'
import {NgCircleProgressModule} from "ng-circle-progress"
import {NgChartsModule} from "ng2-charts"
import {HTTP_INTERCEPTORS} from "@angular/common/http"
import {AuthInterceptor} from "../../helpers/interceptors/auth.interceptor";
import {
  ModalClientSettingsComponent
} from './components/update-parameters-client/modal-client-settings/modal-client-settings.component'
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AdminFeedComponent} from './components/admin-feed/admin-feed.component';
import {AdminFeedSettingsComponent} from './components/admin-feed/admin-feed-settings/admin-feed-settings.component';
import {ClientOfflineComponent} from "./client-offline/client-offline.component";
import {ClientOnlineComponent} from "./client-online/client-online.component";
import { TrainCardComponent } from './components/personal-data/train-card/train-card.component';
import { ClientOfflineFeedComponent } from './components/client-offline-feed/client-offline-feed.component';
import { FeedCardComponent } from './components/client-offline-feed/feed-card/feed-card.component';

@NgModule({
  declarations: [
    PersonalComponent,
    ClientOfflineComponent,
    ClientOnlineComponent,
    AdminComponent,
    PersonalDataComponent,
    MyParametersComponent,
    BeforeAfterComponent,
    CreateClientComponent,
    UpdateParametersClientComponent,
    ModalClientDataComponent,
    BeforeAfterCreateComponent,
    ModalBeforeAfterCreateComponent,
    ModalAdminScheduleComponent,
    ModalClientSettingsComponent,
    AdminFeedComponent,
    AdminFeedSettingsComponent,
    TrainCardComponent,
    ClientOfflineFeedComponent,
    FeedCardComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    WidgetsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatChipsModule,
    DirectivesModule,
    MatTabsModule,
    MatTooltipModule,
    NgCircleProgressModule,
    NgChartsModule,
    MatSlideToggleModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
})
export class PersonalModule {
}
