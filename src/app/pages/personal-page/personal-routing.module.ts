import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalComponent} from "./personal.component";
import {ClientOnlineComponent} from "./client-online/client-online.component";
import {ClientOfflineComponent} from "./client-offline/client-offline.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent,
    children: [
      {
        path: 'client-online',
        component: ClientOnlineComponent,
        children: []
      },
      {
        path: 'client-offline',
        component: ClientOfflineComponent,
        children: []
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: []
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
