import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { LayoutComponent } from './layout/layout.component'
import { WebinarSectionComponent } from './components/webinar-section/webinar-section.component'
import { WebinarCardComponent } from './components/webinar-card/webinar-card.component'
import { ContinueWatchingComponent } from './components/continue-watching/continue-watching.component'
import { MsToTimePipe } from './pipes/timeConverter.pipe'
import { timeLeftPipe } from './pipes/timeLeft.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopSpeakersComponent } from './components/top-speakers/top-speakers.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    WebinarSectionComponent,
    WebinarCardComponent,
    ContinueWatchingComponent,
    timeLeftPipe,
    MsToTimePipe,
    SidebarComponent,
    TopSpeakersComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
