import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>
    AppChildComponent now has a button!
    <button (click)="clickHandler()">AppChildComponent's button</button>
    <p>This is app-child</p>
  </div>
  `
})
export class AppChildComponent {
  @Input() data;

  clickHandler() {
    alert(this.data.name + " --::-- " + this.data.details.detail1);
  }

}