import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { TabNavigationComponent } from './components/tab-navigation/tab-navigation.component';
import { WebinarSectionComponent } from './components/webinar-section/webinar-section.component';
import { WebinarCardComponent } from './components/webinar-card/webinar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    TabNavigationComponent,
    WebinarSectionComponent,
    WebinarCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
