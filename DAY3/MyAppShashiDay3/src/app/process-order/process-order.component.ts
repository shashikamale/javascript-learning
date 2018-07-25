import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  @Input() reqQty: number;
  @Output() replyEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  process() {
    this.replyEvent.emit(`${this.reqQty} of dinner will be serverd on board @10:30 pm`);
  }

}

// process order is a child component.
// holiday component is our parent component.
