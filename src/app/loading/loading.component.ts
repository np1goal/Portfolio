import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loadingPercent: number = 20;

  constructor() { }

  ngOnInit(): void {
    var _this = this;
    document.getElementById('loading-number').textContent = _this.loadingPercent + ' %';
    setInterval(() => {
        if(_this.loadingPercent+20 <= 100) {
          _this.loadingPercent = _this.loadingPercent + 20;
          document.getElementById('loading-number').textContent = _this.loadingPercent + ' %';
        } else {
          clearInterval(1000);
        }
    }, 1000);
  }

  increasePercentage() {
    // this.loadingPercent = this.loadingPercent + 1;
    // console.log(this.loadingPercent + 1);
    // document.getElementById('loading-number').textContent = String(this.loadingPercent);
  }
}
