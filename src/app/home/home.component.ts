import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../styles/color.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('navigation-bar').style.animation = 'navigation-bar-animation 1s 5s forwards';
  }

}
