import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  sitename: string;
  constructor() {
    this.logo = '../../assets/images.png';
    this.sitename = 'Maca Donaldsa Naya Sa';
    console.log('Header Component initialised- Constructor');
   }

  ngOnInit() {
    console.log('Header component ng on init called');
  }

}
