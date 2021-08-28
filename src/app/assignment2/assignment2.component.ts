import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  @Input() items = []
  @Output() itemsadded  = new EventEmitter<string>();
  newItem:string = ''


  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    this.itemsadded.emit(this.newItem)

  }

}
