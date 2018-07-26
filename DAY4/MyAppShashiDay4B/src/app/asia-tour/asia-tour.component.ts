import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourAdvisorService } from '../tour-advisor.service';

@Component({
  selector: 'app-asia-tour',
  templateUrl: './asia-tour.component.html',
  styleUrls: ['./asia-tour.component.css']
})
export class AsiaTourComponent implements OnInit {
  asianTours: Tour[];
  advise: string;
  adviseText: string;

  constructor(private service: TourAdvisorService) {
    this.asianTours = [
      {
        tourName: 'Phuket',
        description: 'boating in phuket',
        image: 'assets/images/kashmir.jpg',
        price: 75000
      },
      {
        tourName: 'Bali',
        description: 'beackes in bali',
        image: 'assets/images/kashmir.jpg',
        price: 55000
      }
    ];
  }

  ngOnInit() {
    this.service.currentadvise.subscribe(value => this.advise = value);
  }
  getAsianTours() {
    return this.asianTours;

  }
  setAdvise() {
    this.service.getAdvise(this.adviseText);
  }
}
