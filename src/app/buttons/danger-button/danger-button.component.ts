import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-danger-button',
  templateUrl: './danger-button.component.html',
  styleUrls: ['./danger-button.component.css']
})
export class DangerButtonComponent implements OnInit {
  @Input() textOnButton: string;
  text: string;

  constructor() { }

  ngOnInit() {
    if (!this.textOnButton) {
      this.text = 'Danger';
    } else {
      this.text = this.textOnButton;
    }
  }

}
