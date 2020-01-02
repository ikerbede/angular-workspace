import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { GameComponent } from './game/game/game.component';
import { ActionsComponent } from './game/left/actions/actions.component';
import { LeftComponent } from './game/left/left.component';
import { ScoresComponent } from './game/left/scores/scores.component';
import { StatsComponent } from './game/left/stats/stats.component';
import { CardComponent } from './game/middle/card/card.component';
import { HandComponent } from './game/middle/hand/hand.component';
import { MiddleComponent } from './game/middle/middle.component';
import { PlayerComponent } from './game/middle/player/player.component';
import { ChatComponent } from './game/right/chat/chat.component';
import { RightComponent } from './game/right/right.component';
import { SharedModule } from './shared/shared.module';

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
    CardComponent,
    HandComponent,
    PlayerComponent,
    LoginComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
