import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentOfferingList } from './offering-list/header/header.component';
import { OfferingListComponent } from './offering-list/offering-list.component';
import { SkeletonComponent } from './offering-list/skeleton/skeleton.component';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './offering-list/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    OfferingListComponent,
    HeaderComponentOfferingList,
    CalendarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
