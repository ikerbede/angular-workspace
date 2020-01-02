import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { GameComponent } from './game/game/game.component';

const appRoutes: Routes = [
  { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/game', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
