import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-button',
  templateUrl: './warning-button.component.html',
  styleUrls: ['./warning-button.component.css']
})
export class WarningButtonComponent implements OnInit {
  @Input() buttonText: string;
  text: string;

  constructor() {}

  ngOnInit() {
    this.text = this.buttonText ? this.buttonText : 'Warning';

  }
}
