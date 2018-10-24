import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-button',
  templateUrl: './success-button.component.html',
  styleUrls: ['./success-button.component.css']
})
export class SuccessButtonComponent implements OnInit {
  @Input() buttonText: string;
  text: string;

  constructor() { }

  ngOnInit() {
    this.text = this.buttonText ? this.buttonText : 'Success';
  }

}
