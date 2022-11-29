import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalRoutingModule} from "./personal-routing.module";
import {WidgetsModule} from "../../widgets/widgets.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { PersonalComponent } from './personal/personal.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ClientOnlineComponent } from './client-online/client-online.component';
import { ClientOfflineComponent } from './client-offline/client-offline.component';
import { AdminComponent } from './admin/admin.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { TrainingScheduleComponent } from './components/training-schedule/training-schedule.component';
import { MyParametersComponent } from './components/my-parameters/my-parameters.component';
import { BeforeAfterComponent } from './components/before-after/before-after.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PlotlyModule} from "angular-plotly.js";
import { CreateClientComponent } from './components/create-client/create-client.component';
import { UpdateParametersClientComponent } from './components/update-parameters-client/update-parameters-client.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ModalParametersComponent } from './components/update-parameters-client/modal-parameters/modal-parameters.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PersonalComponent,
    ClientOnlineComponent,
    ClientOfflineComponent,
    AdminComponent,
    PersonalDataComponent,
    TrainingScheduleComponent,
    MyParametersComponent,
    BeforeAfterComponent,
    CreateClientComponent,
    UpdateParametersClientComponent,
    ModalParametersComponent
  ],
    imports: [
        CommonModule,
        PersonalRoutingModule,
        WidgetsModule,
        PlotlyModule,

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
        MatDialogModule
    ],
})
export class PersonalModule { }
