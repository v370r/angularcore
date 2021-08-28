import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcore';
  rootItems= ["Apples","Bananas","Cherries"]
  onItemAdded(item:string){
    this.rootItems.push(item)
    console.log(this.rootItems)
  }
}
