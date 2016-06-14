import { Component, OnInit } from '@angular/core';
import { NgBishopsAppComponent } from '../ng-bishops.component'
import { RestService } from '../rest.service';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

  username: string;

  sender: string;

  message: string;

  timedate: string;

  constructor(private _rest: RestService) {}

  getMessages() {
    this._rest.getMessages()
        .subscribe(
            data => {
              if (data.data.sender !== false && data.data.sender != "undefined" && data.data.sender !== undefined) {
                this.sender = data.data.sender;
                this.message = data.data.message;
                this.timedate = data.data.timedate;
                console.log(this.sender, this.message, this.timedate);
                this.append(this.sender, this.message, this.timedate)
              }
              else
                return;
            },
            error => console.error(error)
        )
  }

  onSubmit(message: string) {
    this._rest.sendMessage(this.username, message)
        .subscribe(
            data => {

            },
            error => {

            }
        )
  }

  append(sender, text, time) {
    var ul = document.getElementById("conv");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("" + sender + "(" + time + ")" + "says: " + text));
    li.setAttribute("class", "words");
    ul.appendChild(li);
  }

  ngOnInit() {
    this.username = NgBishopsAppComponent.getCookie("username");
    setInterval(() => this.getMessages(), 5000);
  }

}
