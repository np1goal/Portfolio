import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  activeTabString = 'home';

  constructor() { }

  ngOnInit(): void {
    if (location.hash) {
      setTimeout(function() {
    
        window.scrollTo(0, 0);
      }, 1);
    }
  }

  activeTab(tab: string) {
    document.getElementById(tab).style.borderBottom = '3px solid #feda6a';
    document.getElementById(this.activeTabString).style.borderBottom = '0px solid transparent';
    this.activeTabString = tab;
  }
}
