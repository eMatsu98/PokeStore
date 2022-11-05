import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
      trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(78deg)' })),
        transition('rotated => default', animate('150ms ease-out')),
        transition('default => rotated', animate('150ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  state: string = 'default';

  constructor() { }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  ngOnInit(): void {
  }

}
