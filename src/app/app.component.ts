import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'banking-app';
  trial = 1;
  ngOnInit() {
    console.log('Fired from ngoninit from App component ngonint');
  }

  fire(): void {
    this.trial = (this.trial ===  0) ? 1 : 0;
  }
}
