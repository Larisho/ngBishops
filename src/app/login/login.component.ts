import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgBishopsAppComponent } from '../ng-bishops.component';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  constructor(private _router: Router) {}

  onSubmit(username: string, password: string) {

    if (username === "" || password === "") {
      console.log("need to fill all boxes");
      return;
    }

    console.log(username + " " + password);

    if (true) {
      NgBishopsAppComponent.createCookie("check", "123", 0);
      NgBishopsAppComponent.createCookie("username", username, 0);
      this._router.navigate(['/loft']);
      window.location.reload();
      this._router.navigate(['/loft']);
    }
  }

}
