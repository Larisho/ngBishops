import { Component } from '@angular/core';
import { NgBishopsAppComponent } from '../ng-bishops.component';
import { RestService } from '../rest.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  providers: [],
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  error: string;

  constructor(private _service: RestService) {}

  onSubmit(username: string, password: string) {

    var good: boolean = false;

    if (username === "" || password === "") {
      this.error = "You must fill all boxes";
      return;
    }
    
    this._service.login(username, password)
      .subscribe(
        data => {
          if (data.data.status === "success") {
            NgBishopsAppComponent.createCookie("check", "123", 0);
            NgBishopsAppComponent.createCookie("username", username, 0);
            window.location.reload();
          }
          else {
            this.error = "Invalid username or password";
          }
        },
        error => console.error(error)
      );
  }

}
