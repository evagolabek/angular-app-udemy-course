import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //inline-styles
  // styles: [`
  // h3{
  //   color: blue;
  // }`]
})
export class AppComponent {
  showSecret = false;
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);

    //this case our check does not work anymore bc string deemed to be true
    this.log.push(new Date());
  }
}
