import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  template: `<h1>from trial</h1>`
})
export class TrialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("I'm fired from trial component");
  }

}
