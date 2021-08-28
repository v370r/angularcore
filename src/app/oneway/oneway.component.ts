import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  name = "Max"

  constructor() { }

  ngOnInit() {
  }
  onUserInput(event){
    this.name = event.target.value
  }

}
