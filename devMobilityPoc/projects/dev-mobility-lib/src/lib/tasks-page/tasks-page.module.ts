import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderFooterLibModule } from 'header-footer-lib';
import { TasksPageRoutingModule } from './tasks-page-routing.module';
import { TasksPageComponent } from './tasks-page.component';



@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    HeaderFooterLibModule
  ]
})
export class TasksPageModule { }
