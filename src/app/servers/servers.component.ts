import { Component, OnInit } from '@angular/core';

@Component({
   // different ways of selector
  // 1 selector: '[app-servers]',
  // 2 selector:'.app-servers
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
