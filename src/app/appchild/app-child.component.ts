import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>
    AppChildComponent now has a button!
    <button (click)="clickHandler()">AppChildComponent's button</button>
    <p>This is app-child</p>
    <hr>
    <p> Clicking this button will send data to parent:</p>
    <button (click)="sendDataToParent()">Send data to parent</button>
  </div>
  `
})
export class AppChildComponent {
  @Input() data;
  @Output() receiveClick = new EventEmitter;

  clickHandler() {
    alert(this.data.name + " --::-- " + this.data.details.detail1);
  }

  sendDataToParent() {
    this.receiveClick.emit('data from child');
  }

}