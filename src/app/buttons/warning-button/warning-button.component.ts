import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-button',
  templateUrl: './warning-button.component.html',
  styleUrls: ['./warning-button.component.css']
})
export class WarningButtonComponent implements OnInit {
  @Input() textOnButton: string;
  text: string;

  constructor() {}

  ngOnInit() {
    if (!this.textOnButton) {
      this.text = 'Warning';
    } else {
      this.text = this.textOnButton;
    }
  }
}
