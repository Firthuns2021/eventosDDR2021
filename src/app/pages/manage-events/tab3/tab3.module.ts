import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import {LoginComponent} from "../login/login.component";
import {AddEditEventsComponent} from "../add-edit-events/add-edit-events.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, LoginComponent, AddEditEventsComponent]
})
export class Tab3PageModule {}
