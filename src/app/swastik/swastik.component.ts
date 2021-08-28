import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swastik',
  templateUrl: './swastik.component.html',
  styleUrls: ['./swastik.component.css']
})
export class SwastikComponent implements OnInit {
  searchTerm = ""
  itemsCopy =["bandna","apple","corienader","Awdawd","appLe","ApPle"]
  items = this.itemsCopy.slice().map(v => v.toLowerCase())
  mess = [];
  mess2= [];
  ind = 0
  sliced = []
  constructor() { }

  ngOnInit() {
  }

  search(e){
    if (e.target.value !=="")
        {this.mess = this.items.filter((item) => item.startsWith(e.target.value.toLowerCase()))
        this.mess2 =this.mess.filter( e  => this.itemsCopy[this.mess.indexOf(e)])
        console.log(this.mess2)
        this.sliced =["bandna","apple","corienader","Awdawd","appLe","ApPle"]
        // for (let i = 0; i < this.mess.length; i++) {
        //   this.ind = this.items.indexOf(this.mess[i])
        //   this.sliced = this.itemsCopy.slice(this.ind)
        //   this.mess2.push(this.sliced[0])

        // }
        // console.log(this.mess2)
        }
        else{
          // this.mess2.push()
          this.mess2=[]
        }
        this.ind =0


  }


  }



