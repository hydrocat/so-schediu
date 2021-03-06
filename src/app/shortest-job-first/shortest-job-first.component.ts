import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SchedulerNameSpace } from '../model/scheduler';
import { ProccessNameSpace } from '../model/proccess';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shortest-job-first',
  templateUrl: './shortest-job-first.component.html',
  styleUrls: ['./shortest-job-first.component.css'],
  providers: [NgbProgressbarConfig],
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class ShortestJobFirstComponent implements OnInit {

  @Input() proccesses: Array<any>;
  data: { tf: number, tme: number, schedule: Array<ProccessNameSpace.Proccess> };
  
  constructor() {
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccesses) {
      const scheduler = new SchedulerNameSpace.Scheduler(this.proccesses);
      this.data = scheduler.sjf();
    }
  }

}
