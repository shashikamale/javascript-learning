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
  constructor(private service: ShowtripsService) { }

  ngOnInit() {
    this.service.findWeekEnd().subscribe(resp => this.weekEndTripList = resp);
    this.service.findOneDay().subscribe(resp => this.oneDayEndTripList = resp);
  }
}
