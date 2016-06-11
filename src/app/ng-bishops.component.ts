import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { LeaderboardComponent } from './+leaderboard';
import { RulesComponent } from './+rules';
import { AboutComponent } from './+about';
import { ProfileComponent } from './+profile';
import { LoftComponent } from './+loft';
import { ChatComponent } from './+chat';
import { GameComponent } from './+game';
import { LoginComponent } from './login';

@Component({
  moduleId: module.id,
  selector: 'ng-bishops-app',
  templateUrl: 'ng-bishops.component.html',
  styleUrls: ['ng-bishops.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/leaderboard', component: LeaderboardComponent},
  {path: '/rules', component: RulesComponent},
  {path: '/about', component: AboutComponent},
  {path: '/profile', component: ProfileComponent},
  {path: '/loft/game', component: GameComponent},
  {path: '/loft/chat', component: ChatComponent},
  {path: '/login', component: LoginComponent},
  {path: '/loft', component: LoftComponent}
])
export class NgBishopsAppComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private _router: Router) {}

  logout() {
    NgBishopsAppComponent.delete_cookie("check");
    this._router.navigate(['/']);
    window.location.reload();
    this._router.navigate(['/']);
  }

  static createCookie(name: string, value: string, days: number) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  static getCookie(name: string){
    var pattern = RegExp(name + "=.[^;]*");
    var matched = document.cookie.match(pattern);
    if(matched){
      var cookie = matched[0].split('=');
      return cookie[1]
    }
    return "";
  }

  static delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 UTC;';
  }

  ngOnInit() {
    this.isLoggedIn = false;

    if (NgBishopsAppComponent.getCookie("check") === "123") {
      this.isLoggedIn = true;
    }
  }
}
