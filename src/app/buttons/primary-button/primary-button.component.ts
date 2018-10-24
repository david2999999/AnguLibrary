import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() textOnButton: string;
  text: string;

  constructor() { }

  ngOnInit() {
    if (!this.textOnButton) {
      this.text = 'Primary';
    } else {
      this.text = this.textOnButton;
    }
  }

}
