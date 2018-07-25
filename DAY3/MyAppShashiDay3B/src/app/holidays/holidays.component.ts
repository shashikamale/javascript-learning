import { Component, OnInit } from '@angular/core';
import { ShowtripsService } from '../showtrips.service';
import { Weekendtrip } from '../weekendtrip';
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  weekEndTripList: Weekendtrip[];
  oneDayEndTripList: Weekendtrip[];
  weekendPickupPoints: any;
  qty = 1;
  msg: string;
  constructor(private service: ShowtripsService) { }

  ngOnInit() {
    this.service.findWeekEnd().subscribe(resp => this.weekEndTripList = resp);
    this.service.findOneDay().subscribe(resp => this.oneDayEndTripList = resp);
  }
  show(destination) {
    console.log(destination);
    if (destination.toLowerCase() === 'vijayawada') {
      this.weekendPickupPoints = ['Miyapur', 'Lingampally', 'Hitech'];
    } else {
      this.weekendPickupPoints = ['MGBS', 'Gachibowli', 'Hitech'];
    }
  }

  onChange(val) {
    this.msg = val;

  }

  display(destination) {
    console.log(destination);
    this.weekendPickupPoints = ['Miyapur', 'Lingampally', 'Hitech'];
  }

}

