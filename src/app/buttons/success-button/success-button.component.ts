import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-button',
  templateUrl: './success-button.component.html',
  styleUrls: ['./success-button.component.css']
})
export class SuccessButtonComponent implements OnInit {
  @Input() textOnButton: string;
  text: string;

  constructor() { }

  ngOnInit() {
    if (!this.textOnButton) {
      this.text = 'Success';
    } else {
      this.text = this.textOnButton;
    }
  }

}
