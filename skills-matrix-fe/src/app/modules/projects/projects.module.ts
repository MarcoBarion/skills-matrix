import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ProjectsRoutingModule} from './projects-routing.module';

import {ProjectsCreateComponent} from './pages/projects-create/projects-create.component';
import {ProjectsDeleteComponent} from './pages/projects-delete/projects-delete.component';
import {ProjectsEditComponent} from './pages/projects-edit/projects-edit.component';
import {ProjectsListComponent} from './pages/projects-list/projects-list.component';
import {ProjectsViewComponent} from './pages/projects-view/projects-view.component';

@NgModule({
  declarations: [
    ProjectsCreateComponent,
    ProjectsDeleteComponent,
    ProjectsEditComponent,
    ProjectsListComponent,
    ProjectsViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
