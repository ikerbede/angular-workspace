import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { ScoresComponent } from './left/scores/scores.component';
import { StatsComponent } from './left/stats/stats.component';
import { MiddleComponent } from './middle/middle.component';
import { ActionsComponent } from './right/actions/actions.component';
import { ChatComponent } from './right/chat/chat.component';
import { RightComponent } from './right/right.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './middle/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent,
    ChatComponent,
    ActionsComponent,
    ScoresComponent,
    StatsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
