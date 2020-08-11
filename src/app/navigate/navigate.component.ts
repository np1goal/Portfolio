import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  presentTab = 'home';

  constructor() { }

  ngOnInit(): void {
    if (location.hash) {
      setTimeout(function() {
    
        window.scrollTo(0, 0);
      }, 1);
    }
  }
}
