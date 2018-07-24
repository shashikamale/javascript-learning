import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  constructor() {
    this.logo = '../../assets/googlelogo.png';
    console.log('Header Component initialised- Constructor');
   }

  ngOnInit() {
    console.log('Header component ng on init called');
  }

}
