import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ghost-button-rect',
  templateUrl: './ghost-button-rect.component.html',
  styleUrls: ['./ghost-button-rect.component.css']
})
export class GhostButtonRectComponent implements OnInit {
  @Input() buttonText: string;
  text: string;

  constructor() { }

  ngOnInit() {
    this.text = this.buttonText ? this.buttonText : 'Ghost Button';
  }

}
