import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { LeaderboardComponent } from './+leaderboard';
import { RulesComponent } from './+rules';
import { AboutComponent } from './+about';
import { ProfileComponent } from './+profile';
import { LoftComponent } from './+loft';
import { ChatComponent } from './+chat';
import { GameComponent } from './+game';

@Component({
  moduleId: module.id,
  selector: 'ng-bishops-app',
  templateUrl: 'ng-bishops.component.html',
  styleUrls: ['ng-bishops.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/leaderboard', component: LeaderboardComponent},
  {path: '/rules', component: RulesComponent},
  {path: '/about', component: AboutComponent},
  {path: '/profile', component: ProfileComponent},
  {path: '/loft', component: LoftComponent},
  {path: '/chat', component: ChatComponent},
  {path: '/game', component: GameComponent}
])
export class NgBishopsAppComponent {

  constructor(private router: Router) {}
}
