import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-home-content',
  templateUrl: './grid-home-content.component.html',
  styleUrls: ['./grid-home-content.component.scss'],
})
export class GridHomeContentComponent implements OnInit {

  @Input() public text : string;
  @Input() public image : string;
  @Input() public link : string;

  constructor() { }

  ngOnInit() {

  }

}
