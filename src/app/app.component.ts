import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>Simpest input-output</h1>
      <div>{{data1.name}}</div>
      <app-child [data]="data1"></app-child>
    </div>
  `
})
export class AppComponent  {
  data1 = {
    name: 'This data is in the parent, AppComponent',
    details: {
      detail1: 'This is detail 1',
      detail2: 'This is detail 2'
    }
  }

}
