import { Component } from '@angular/core';


@Component({
  selector: 'app-warning-alert',
  template: `
  <p> this is a warning, you are in danger </p>
  `,
  styles: [
    `p{
      padding: 20px;
      background-color: red;
    }`
  ]
})
export class WarningAlertComponent {

}