import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-option-button',
  templateUrl: './multi-option-button.component.html',
  styleUrls: ['./multi-option-button.component.css']
})
export class MultiOptionButtonComponent implements OnInit {
  @Input() buttonType: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {}
}
