import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksToDoComponent } from './tasks-to-do/tasks-to-do.component';
import { TasksDoneComponent } from './tasks-done/tasks-done.component';
import { TasksStatsComponent } from './tasks-stats/tasks-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksToDoComponent,
    TasksDoneComponent,
    TasksStatsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
