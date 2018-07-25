import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourAdvisorService } from '../tour-advisor.service';

@Component({
  selector: 'app-india-tour',
  templateUrl: './india-tour.component.html',
  styleUrls: ['./india-tour.component.css']
})
export class IndiaTourComponent implements OnInit {
  indianTours: Tour[];

  advise: string;
  adviseText: string;

  constructor(private service: TourAdvisorService) {
    this.indianTours = [
      {
        tourName: 'Beautiful Kashmir',
        description: 'Lakes in kashmir',
        image: 'assets/images/kashmir.jpg',
        price: 45000
      },
      {
        tourName: 'Andaman',
        description: 'Lakes in kashmir',
        image: 'assets/images/kashmir.jpg',
        price: 45000
      }
    ];
  }

  ngOnInit() {
    this.service.currentadvise.subscribe(value => this.advise = value);
  }
  getIndianTours() {
    return this.indianTours;
  }
  setAdvise() {
    this.service.getAdvise(this.adviseText);
  }
}
