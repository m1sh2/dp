import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent, ProjectsListComponent } from './components';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,

    // Routing
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
