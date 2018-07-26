import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ShowtripsService } from '../showtrips.service';
import { Weekendtrip } from '../weekendtrip';
import { IndiaTourComponent } from '../india-tour/india-tour.component';
import { AsiaTourComponent } from '../asia-tour/asia-tour.component';
import { Tour } from '../tour';
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit, AfterContentInit {

  weekEndTripList: Weekendtrip[];
  oneDayEndTripList: Weekendtrip[];
  weekendPickupPoints: any;
  qty = 1;
  msg: string;
  tours = new Array<Tour[]>();
  indiaTours: Tour[];
  asiaTours: Tour[];

  @ViewChild(IndiaTourComponent) indianTour: IndiaTourComponent;
  @ViewChild(AsiaTourComponent) asianTour: AsiaTourComponent;

  ngAfterContentInit(): void {
    const indTour = this.indianTour.getIndianTours();
    this.indiaTours = this.indianTour.indianTours;
    const asiaTour = this.asianTour.getAsianTours();
    this.asiaTours = this.asianTour.asianTours;

  }

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
  // new stuff
  onChange(val) {
    this.msg = val;

  }

  display(destination) {
    console.log(destination);
    this.weekendPickupPoints = ['Miyapur', 'Lingampally', 'Hitech'];
  }

}

