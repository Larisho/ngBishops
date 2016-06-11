import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

  email: string = "checkerwars[at]ubishops.ca";
  
  constructor() {}

  ngOnInit() {
  }

}
