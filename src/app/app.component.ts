import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'AnimationTest';
  public data: { name: string; data: string[], showData: boolean }[];
  dataVisible = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

  public toggleData(element: any): void {
    element.showData = !element.showData;
  }
}
