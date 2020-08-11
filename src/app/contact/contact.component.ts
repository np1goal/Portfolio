import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEnvelop(card) {
    document.getElementById(card).style.animation = 'flip-envelop 2s forwards ease';
    document.getElementById(card+'-top').style.animation = 'open-envelop 1s 2s forwards ease';
    // document.getElementById(card+'-card').textContent = '';
    document.getElementById(card+'-letter').style.animation = 'open-letter 1s 3s forwards ease';
  }

}
