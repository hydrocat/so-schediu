import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ProccessNameSpace } from '../model/proccess';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() proccesses: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccesses) {
      console.log(this.proccesses);
    }
  }

}
