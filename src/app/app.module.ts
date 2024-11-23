import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OfferingListComponent } from './offering-list/offering-list.component';
import { SkeletonComponent } from './offering-list/skeleton/skeleton.component';
import { HeaderComponent } from './offering-list/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    SidebarComponent,
    OfferingListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
